#!/usr/bin/env node

/**
 * Import products from JSON to PostgreSQL
 * Run with: node scripts/import-products.js
 */

import pg from 'pg';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const { Client } = pg;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Database connection
const client = new Client({
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'monpetitbazaar',
  user: process.env.DB_USER || 'admin',
  password: process.env.DB_PASSWORD || 'password',
});

async function importProducts() {
  try {
    // Connect to database
    await client.connect();
    console.log('✅ Connected to PostgreSQL');

    // Read products from JSON
    const productsPath = path.join(__dirname, '../src/data/products.json');
    const productsData = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
    console.log(`📦 Found ${productsData.length} products to import`);

    // Create categories first
    const categories = {
      'electronics': 'Electronic devices and accessories',
      'audio': 'Audio equipment and accessories',
      'wearables': 'Smart watches and fitness trackers',
      'handmade': 'Artisan and handcrafted items'
    };

    console.log('\n📁 Importing categories...');
    for (const [name, description] of Object.entries(categories)) {
      await client.query(
        `INSERT INTO categories (name, description, is_active)
         VALUES ($1, $2, true)
         ON CONFLICT (name) DO NOTHING`,
        [name, description]
      );
      console.log(`  ✓ ${name}`);
    }

    // Get category IDs
    const categoryMap = {};
    const categoriesResult = await client.query('SELECT id, name FROM categories');
    categoriesResult.rows.forEach(row => {
      categoryMap[row.name] = row.id;
    });

    // Import products
    console.log('\n🛍️  Importing products...');
    for (const product of productsData) {
      // Insert or update product
      const productResult = await client.query(
        `INSERT INTO products (
          name, slug, description, short_description, sku, 
          price, compare_price, stock_quantity, 
          is_active, is_featured, category_id
        ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
        ON CONFLICT (slug) 
        DO UPDATE SET 
          name = EXCLUDED.name,
          description = EXCLUDED.description,
          short_description = EXCLUDED.short_description,
          price = EXCLUDED.price,
          compare_price = EXCLUDED.compare_price,
          stock_quantity = EXCLUDED.stock_quantity,
          is_active = EXCLUDED.is_active,
          is_featured = EXCLUDED.is_featured,
          category_id = EXCLUDED.category_id,
          updated_at = CURRENT_TIMESTAMP
        RETURNING id`,
        [
          product.name,
          product.slug,
          product.description,
          product.description.substring(0, 200) + '...',
          `SKU-${product.id.toString().padStart(6, '0')}`,
          product.price,
          product.comparePrice || null,
          product.stock,
          true, // is_active
          product.id <= 3, // is_featured (first 3 products)
          categoryMap[product.category.toLowerCase()]
        ]
      );

      const productId = productResult.rows[0].id;
      console.log(`  ✓ ${product.name} (ID: ${productId})`);

      // Delete existing images for this product
      await client.query('DELETE FROM product_images WHERE product_id = $1', [productId]);

      // Insert product images
      for (let i = 0; i < product.images.length; i++) {
        await client.query(
          `INSERT INTO product_images (product_id, image_url, alt_text, is_primary, sort_order)
           VALUES ($1, $2, $3, $4, $5)`,
          [
            productId,
            product.images[i],
            product.name,
            i === 0, // First image is primary
            i
          ]
        );
      }
      console.log(`    → Added ${product.images.length} images`);
    }

    // Show summary
    const productsCount = await client.query('SELECT COUNT(*) FROM products');
    const imagesCount = await client.query('SELECT COUNT(*) FROM product_images');
    const categoriesCount = await client.query('SELECT COUNT(*) FROM categories');

    console.log('\n✨ Import completed successfully!');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`📊 Summary:`);
    console.log(`   Categories: ${categoriesCount.rows[0].count}`);
    console.log(`   Products:   ${productsCount.rows[0].count}`);
    console.log(`   Images:     ${imagesCount.rows[0].count}`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('\n🎉 You can now view products in Adminer!');
    console.log('   http://localhost:8081');

  } catch (error) {
    console.error('❌ Error importing products:', error);
    process.exit(1);
  } finally {
    await client.end();
  }
}

// Run the import
importProducts();
