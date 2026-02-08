# 🍃 Mon Petit Bazaar - Spring Boot E-commerce Architecture

> **Enterprise-grade Java e-commerce platform with Spring Boot**

## 🏗️ Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
│                        Frontend Layer                        │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  React 19 + TypeScript + TailwindCSS                   │ │
│  │  - Axios for API communication                         │ │
│  │  - React Query for caching                             │ │
│  │  - React Hook Form for forms                           │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
                            ↓ REST API
┌─────────────────────────────────────────────────────────────┐
│                    Spring Boot Backend                       │
│  ┌────────────────────────────────────────────────────────┐ │
│  │  Spring Boot 3.2+ (Java 21)                            │ │
│  │  ├── Spring Web (REST Controllers)                     │ │
│  │  ├── Spring Security (Auth + JWT)                      │ │
│  │  ├── Spring Data JPA (Database access)                │ │
│  │  ├── Spring Validation (Bean validation)              │ │
│  │  ├── Spring Boot Actuator (Monitoring)                │ │
│  │  └── Spring Cache (Redis integration)                 │ │
│  └────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────┘
                            ↓ JPA/Hibernate
┌─────────────────────────────────────────────────────────────┐
│                      Database Layer                          │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────────┐  │
│  │ PostgreSQL   │  │    Redis     │  │   Cloudinary     │  │
│  │ (Primary DB) │  │   (Cache)    │  │   (Images)       │  │
│  └──────────────┘  └──────────────┘  └──────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                            ↓
┌─────────────────────────────────────────────────────────────┐
│                    External Services                         │
│     Stripe API  |  SendGrid  |  Docker  |  AWS/Railway      │
└─────────────────────────────────────────────────────────────┘
```

---

## 🛠️ Technology Stack

### Backend (Spring Boot)
- **Framework**: Spring Boot 3.2+
- **Java Version**: Java 21 (LTS)
- **Core Dependencies**:
  - `spring-boot-starter-web` - REST API
  - `spring-boot-starter-data-jpa` - Database access
  - `spring-boot-starter-security` - Authentication & Authorization
  - `spring-boot-starter-validation` - Input validation
  - `spring-boot-starter-cache` - Caching support
  - `spring-boot-starter-actuator` - Monitoring & health checks
  - `spring-boot-starter-mail` - Email notifications

### Database & Storage
- **Primary Database**: PostgreSQL 16
- **Cache**: Redis 7
- **ORM**: Hibernate (via Spring Data JPA)
- **Migration**: Flyway or Liquibase
- **File Storage**: Cloudinary or AWS S3

### Security & Authentication
- **Authentication**: JWT (JSON Web Tokens)
- **Password Hashing**: BCrypt
- **Authorization**: Role-based (ADMIN, USER)
- **CORS**: Configured for frontend domains

### Monitoring & Observability
- **Metrics**: Spring Boot Actuator + Micrometer
- **Logging**: Logback with JSON format
- **Health Checks**: Built-in Spring Boot health indicators
- **API Documentation**: OpenAPI 3 (Swagger)

---

## 📊 Database Schema Design

### Core Entities

```sql
-- Users Management
CREATE TABLE users (
    id BIGSERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    phone VARCHAR(20),
    is_email_verified BOOLEAN DEFAULT false,
    is_active BOOLEAN DEFAULT true,
    role VARCHAR(20) DEFAULT 'USER',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Products Management
CREATE TABLE categories (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    parent_id BIGINT REFERENCES categories(id),
    is_active BOOLEAN DEFAULT true,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE products (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    short_description VARCHAR(500),
    sku VARCHAR(100) UNIQUE NOT NULL,
    price DECIMAL(10,2) NOT NULL,
    compare_price DECIMAL(10,2),
    stock_quantity INTEGER DEFAULT 0,
    weight DECIMAL(8,3),
    is_active BOOLEAN DEFAULT true,
    is_featured BOOLEAN DEFAULT false,
    category_id BIGINT REFERENCES categories(id),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE product_images (
    id BIGSERIAL PRIMARY KEY,
    product_id BIGINT NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    image_url VARCHAR(500) NOT NULL,
    alt_text VARCHAR(255),
    is_primary BOOLEAN DEFAULT false,
    sort_order INTEGER DEFAULT 0
);

-- Orders Management
CREATE TABLE orders (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT REFERENCES users(id),
    order_number VARCHAR(50) UNIQUE NOT NULL,
    status VARCHAR(20) DEFAULT 'PENDING',
    subtotal DECIMAL(10,2) NOT NULL,
    tax_amount DECIMAL(10,2) DEFAULT 0,
    shipping_amount DECIMAL(10,2) DEFAULT 0,
    total_amount DECIMAL(10,2) NOT NULL,
    payment_status VARCHAR(20) DEFAULT 'PENDING',
    payment_method VARCHAR(50),
    stripe_payment_intent_id VARCHAR(255),
    shipping_address JSONB,
    billing_address JSONB,
    notes TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE order_items (
    id BIGSERIAL PRIMARY KEY,
    order_id BIGINT NOT NULL REFERENCES orders(id) ON DELETE CASCADE,
    product_id BIGINT NOT NULL REFERENCES products(id),
    quantity INTEGER NOT NULL,
    unit_price DECIMAL(10,2) NOT NULL,
    total_price DECIMAL(10,2) NOT NULL
);

-- Shopping Cart
CREATE TABLE cart_items (
    id BIGSERIAL PRIMARY KEY,
    user_id BIGINT REFERENCES users(id),
    product_id BIGINT NOT NULL REFERENCES products(id),
    quantity INTEGER NOT NULL DEFAULT 1,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE(user_id, product_id)
);
```

---

## 🏢 Project Structure

```
src/
├── main/
│   ├── java/
│   │   └── com/
│   │       └── monpetitbazaar/
│   │           ├── MonPetitBazaarApplication.java
│   │           ├── config/
│   │           │   ├── SecurityConfig.java
│   │           │   ├── CacheConfig.java
│   │           │   ├── CloudinaryConfig.java
│   │           │   └── OpenApiConfig.java
│   │           ├── controller/
│   │           │   ├── AuthController.java
│   │           │   ├── UserController.java
│   │           │   ├── ProductController.java
│   │           │   ├── CategoryController.java
│   │           │   ├── OrderController.java
│   │           │   └── CartController.java
│   │           ├── dto/
│   │           │   ├── request/
│   │           │   │   ├── LoginRequest.java
│   │           │   │   ├── RegisterRequest.java
│   │           │   │   ├── ProductRequest.java
│   │           │   │   └── OrderRequest.java
│   │           │   └── response/
│   │           │       ├── UserResponse.java
│   │           │       ├── ProductResponse.java
│   │           │       ├── OrderResponse.java
│   │           │       └── ApiResponse.java
│   │           ├── entity/
│   │           │   ├── User.java
│   │           │   ├── Product.java
│   │           │   ├── Category.java
│   │           │   ├── Order.java
│   │           │   ├── OrderItem.java
│   │           │   ├── CartItem.java
│   │           │   └── ProductImage.java
│   │           ├── repository/
│   │           │   ├── UserRepository.java
│   │           │   ├── ProductRepository.java
│   │           │   ├── CategoryRepository.java
│   │           │   ├── OrderRepository.java
│   │           │   └── CartItemRepository.java
│   │           ├── service/
│   │           │   ├── AuthService.java
│   │           │   ├── UserService.java
│   │           │   ├── ProductService.java
│   │           │   ├── CategoryService.java
│   │           │   ├── OrderService.java
│   │           │   ├── CartService.java
│   │           │   ├── PaymentService.java
│   │           │   ├── EmailService.java
│   │           │   └── ImageUploadService.java
│   │           ├── security/
│   │           │   ├── JwtAuthenticationFilter.java
│   │           │   ├── JwtTokenProvider.java
│   │           │   ├── CustomUserDetails.java
│   │           │   └── CustomUserDetailsService.java
│   │           ├── exception/
│   │           │   ├── GlobalExceptionHandler.java
│   │           │   ├── ResourceNotFoundException.java
│   │           │   ├── BadRequestException.java
│   │           │   └── UnauthorizedException.java
│   │           └── util/
│   │               ├── Constants.java
│   │               ├── DateUtils.java
│   │               └── ValidationUtils.java
│   └── resources/
│       ├── application.yml
│       ├── application-dev.yml
│       ├── application-prod.yml
│       └── db/migration/
│           ├── V1__Create_users_table.sql
│           ├── V2__Create_categories_table.sql
│           ├── V3__Create_products_table.sql
│           └── V4__Create_orders_table.sql
└── test/
    └── java/
        └── com/
            └── monpetitbazaar/
                ├── controller/
                ├── service/
                └── repository/
```

---

## 👤 User Management Implementation

### User Entity
```java
@Entity
@Table(name = "users")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(unique = true, nullable = false, length = 50)
    private String username;
    
    @Column(unique = true, nullable = false)
    @Email(message = "Email should be valid")
    private String email;
    
    @Column(nullable = false)
    @Size(min = 8, message = "Password must be at least 8 characters")
    private String password;
    
    @Column(name = "first_name", length = 100)
    private String firstName;
    
    @Column(name = "last_name", length = 100)
    private String lastName;
    
    private String phone;
    
    @Column(name = "is_email_verified")
    private Boolean isEmailVerified = false;
    
    @Column(name = "is_active")
    private Boolean isActive = true;
    
    @Enumerated(EnumType.STRING)
    private Role role = Role.USER;
    
    @CreationTimestamp
    @Column(name = "created_at")
    private LocalDateTime createdAt;
    
    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
    
    // One-to-many relationship with orders
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<Order> orders = new ArrayList<>();
    
    // One-to-many relationship with cart items
    @OneToMany(mappedBy = "user", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<CartItem> cartItems = new ArrayList<>();
}

public enum Role {
    USER, ADMIN
}
```

### User Service
```java
@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
public class UserService {
    
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final ModelMapper modelMapper;
    
    public UserResponse createUser(RegisterRequest request) {
        // Check if user already exists
        if (userRepository.existsByUsername(request.getUsername()) ||
            userRepository.existsByEmail(request.getEmail())) {
            throw new BadRequestException("User already exists");
        }
        
        // Create new user
        User user = User.builder()
            .username(request.getUsername())
            .email(request.getEmail())
            .password(passwordEncoder.encode(request.getPassword()))
            .firstName(request.getFirstName())
            .lastName(request.getLastName())
            .phone(request.getPhone())
            .role(Role.USER)
            .isActive(true)
            .isEmailVerified(false)
            .build();
        
        User savedUser = userRepository.save(user);
        log.info("User created successfully: {}", savedUser.getUsername());
        
        return modelMapper.map(savedUser, UserResponse.class);
    }
    
    @Cacheable(value = "users", key = "#id")
    public UserResponse getUserById(Long id) {
        User user = userRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("User not found"));
        return modelMapper.map(user, UserResponse.class);
    }
    
    public UserResponse updateUser(Long id, UpdateUserRequest request) {
        User user = userRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("User not found"));
        
        // Update fields
        user.setFirstName(request.getFirstName());
        user.setLastName(request.getLastName());
        user.setPhone(request.getPhone());
        
        User updatedUser = userRepository.save(user);
        log.info("User updated successfully: {}", updatedUser.getUsername());
        
        return modelMapper.map(updatedUser, UserResponse.class);
    }
    
    public void deactivateUser(Long id) {
        User user = userRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("User not found"));
        
        user.setIsActive(false);
        userRepository.save(user);
        log.info("User deactivated: {}", user.getUsername());
    }
    
    public Page<UserResponse> getAllUsers(Pageable pageable) {
        Page<User> users = userRepository.findByIsActiveTrue(pageable);
        return users.map(user -> modelMapper.map(user, UserResponse.class));
    }
}
```

### User Controller
```java
@RestController
@RequestMapping("/api/users")
@RequiredArgsConstructor
@Validated
@Slf4j
public class UserController {
    
    private final UserService userService;
    
    @GetMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN') or #id == authentication.principal.id")
    public ResponseEntity<ApiResponse<UserResponse>> getUserById(@PathVariable Long id) {
        UserResponse user = userService.getUserById(id);
        return ResponseEntity.ok(ApiResponse.success(user));
    }
    
    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN') or #id == authentication.principal.id")
    public ResponseEntity<ApiResponse<UserResponse>> updateUser(
            @PathVariable Long id,
            @Valid @RequestBody UpdateUserRequest request) {
        UserResponse updatedUser = userService.updateUser(id, request);
        return ResponseEntity.ok(ApiResponse.success(updatedUser));
    }
    
    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ApiResponse<Void>> deactivateUser(@PathVariable Long id) {
        userService.deactivateUser(id);
        return ResponseEntity.ok(ApiResponse.success("User deactivated successfully"));
    }
    
    @GetMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ApiResponse<Page<UserResponse>>> getAllUsers(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size,
            @RequestParam(defaultValue = "createdAt") String sortBy) {
        
        Pageable pageable = PageRequest.of(page, size, Sort.by(sortBy).descending());
        Page<UserResponse> users = userService.getAllUsers(pageable);
        return ResponseEntity.ok(ApiResponse.success(users));
    }
}
```

---

## 📦 Product Management Implementation

### Product Entity
```java
@Entity
@Table(name = "products")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Product {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    @Column(nullable = false)
    @Size(min = 2, max = 255, message = "Product name must be between 2 and 255 characters")
    private String name;
    
    @Column(columnDefinition = "TEXT")
    private String description;
    
    @Column(name = "short_description", length = 500)
    private String shortDescription;
    
    @Column(unique = true, nullable = false, length = 100)
    private String sku;
    
    @Column(nullable = false, precision = 10, scale = 2)
    @DecimalMin(value = "0.01", message = "Price must be greater than 0")
    private BigDecimal price;
    
    @Column(name = "compare_price", precision = 10, scale = 2)
    private BigDecimal comparePrice;
    
    @Column(name = "stock_quantity")
    @Min(value = 0, message = "Stock quantity cannot be negative")
    private Integer stockQuantity = 0;
    
    @Column(precision = 8, scale = 3)
    private BigDecimal weight;
    
    @Column(name = "is_active")
    private Boolean isActive = true;
    
    @Column(name = "is_featured")
    private Boolean isFeatured = false;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "category_id")
    private Category category;
    
    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private List<ProductImage> images = new ArrayList<>();
    
    @CreationTimestamp
    @Column(name = "created_at")
    private LocalDateTime createdAt;
    
    @UpdateTimestamp
    @Column(name = "updated_at")
    private LocalDateTime updatedAt;
    
    // Helper method to get primary image
    public String getPrimaryImageUrl() {
        return images.stream()
            .filter(ProductImage::getIsPrimary)
            .findFirst()
            .map(ProductImage::getImageUrl)
            .orElse(null);
    }
    
    // Helper method to check if product is in stock
    public boolean isInStock() {
        return stockQuantity != null && stockQuantity > 0;
    }
    
    // Helper method to check if product is on sale
    public boolean isOnSale() {
        return comparePrice != null && comparePrice.compareTo(price) > 0;
    }
}
```

### Product Service
```java
@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
public class ProductService {
    
    private final ProductRepository productRepository;
    private final CategoryRepository categoryRepository;
    private final ImageUploadService imageUploadService;
    private final ModelMapper modelMapper;
    
    public ProductResponse createProduct(CreateProductRequest request, List<MultipartFile> images) {
        // Validate category
        Category category = null;
        if (request.getCategoryId() != null) {
            category = categoryRepository.findById(request.getCategoryId())
                .orElseThrow(() -> new ResourceNotFoundException("Category not found"));
        }
        
        // Check SKU uniqueness
        if (productRepository.existsBySku(request.getSku())) {
            throw new BadRequestException("Product SKU already exists");
        }
        
        // Create product
        Product product = Product.builder()
            .name(request.getName())
            .description(request.getDescription())
            .shortDescription(request.getShortDescription())
            .sku(request.getSku())
            .price(request.getPrice())
            .comparePrice(request.getComparePrice())
            .stockQuantity(request.getStockQuantity())
            .weight(request.getWeight())
            .isActive(request.getIsActive())
            .isFeatured(request.getIsFeatured())
            .category(category)
            .build();
        
        Product savedProduct = productRepository.save(product);
        
        // Upload and save images
        if (images != null && !images.isEmpty()) {
            uploadProductImages(savedProduct, images);
        }
        
        log.info("Product created successfully: {}", savedProduct.getName());
        return modelMapper.map(savedProduct, ProductResponse.class);
    }
    
    @Cacheable(value = "products", key = "#id")
    public ProductResponse getProductById(Long id) {
        Product product = productRepository.findByIdAndIsActiveTrue(id)
            .orElseThrow(() -> new ResourceNotFoundException("Product not found"));
        return modelMapper.map(product, ProductResponse.class);
    }
    
    public ProductResponse updateProduct(Long id, UpdateProductRequest request) {
        Product product = productRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Product not found"));
        
        // Update fields
        product.setName(request.getName());
        product.setDescription(request.getDescription());
        product.setShortDescription(request.getShortDescription());
        product.setPrice(request.getPrice());
        product.setComparePrice(request.getComparePrice());
        product.setStockQuantity(request.getStockQuantity());
        product.setWeight(request.getWeight());
        product.setIsActive(request.getIsActive());
        product.setIsFeatured(request.getIsFeatured());
        
        // Update category if provided
        if (request.getCategoryId() != null) {
            Category category = categoryRepository.findById(request.getCategoryId())
                .orElseThrow(() -> new ResourceNotFoundException("Category not found"));
            product.setCategory(category);
        }
        
        Product updatedProduct = productRepository.save(product);
        log.info("Product updated successfully: {}", updatedProduct.getName());
        
        return modelMapper.map(updatedProduct, ProductResponse.class);
    }
    
    public void deleteProduct(Long id) {
        Product product = productRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Product not found"));
        
        product.setIsActive(false);
        productRepository.save(product);
        log.info("Product deleted (soft delete): {}", product.getName());
    }
    
    public Page<ProductResponse> getAllProducts(ProductSearchRequest searchRequest, Pageable pageable) {
        Page<Product> products = productRepository.findProducts(
            searchRequest.getQuery(),
            searchRequest.getCategoryId(),
            searchRequest.getMinPrice(),
            searchRequest.getMaxPrice(),
            searchRequest.getInStockOnly(),
            pageable
        );
        
        return products.map(product -> modelMapper.map(product, ProductResponse.class));
    }
    
    @CacheEvict(value = "products", key = "#productId")
    public ProductResponse updateStock(Long productId, Integer newQuantity) {
        Product product = productRepository.findById(productId)
            .orElseThrow(() -> new ResourceNotFoundException("Product not found"));
        
        product.setStockQuantity(newQuantity);
        Product updatedProduct = productRepository.save(product);
        
        log.info("Stock updated for product {}: {} units", product.getName(), newQuantity);
        return modelMapper.map(updatedProduct, ProductResponse.class);
    }
    
    private void uploadProductImages(Product product, List<MultipartFile> images) {
        for (int i = 0; i < images.size(); i++) {
            try {
                String imageUrl = imageUploadService.uploadImage(images.get(i));
                
                ProductImage productImage = ProductImage.builder()
                    .product(product)
                    .imageUrl(imageUrl)
                    .isPrimary(i == 0) // First image is primary
                    .sortOrder(i)
                    .build();
                
                product.getImages().add(productImage);
            } catch (Exception e) {
                log.error("Failed to upload image for product {}: {}", product.getName(), e.getMessage());
            }
        }
        productRepository.save(product);
    }
}
```

### Product Repository (Custom Queries)
```java
@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {
    
    Optional<Product> findByIdAndIsActiveTrue(Long id);
    Optional<Product> findBySku(String sku);
    boolean existsBySku(String sku);
    
    Page<Product> findByIsActiveTrue(Pageable pageable);
    Page<Product> findByIsActiveTrueAndIsFeaturedTrue(Pageable pageable);
    Page<Product> findByIsActiveTrueAndCategoryId(Long categoryId, Pageable pageable);
    
    @Query("SELECT p FROM Product p WHERE p.isActive = true AND " +
           "(:query IS NULL OR LOWER(p.name) LIKE LOWER(CONCAT('%', :query, '%')) OR " +
           "LOWER(p.description) LIKE LOWER(CONCAT('%', :query, '%'))) AND " +
           "(:categoryId IS NULL OR p.category.id = :categoryId) AND " +
           "(:minPrice IS NULL OR p.price >= :minPrice) AND " +
           "(:maxPrice IS NULL OR p.price <= :maxPrice) AND " +
           "(:inStockOnly = false OR p.stockQuantity > 0)")
    Page<Product> findProducts(@Param("query") String query,
                              @Param("categoryId") Long categoryId,
                              @Param("minPrice") BigDecimal minPrice,
                              @Param("maxPrice") BigDecimal maxPrice,
                              @Param("inStockOnly") Boolean inStockOnly,
                              Pageable pageable);
    
    @Query("SELECT p FROM Product p WHERE p.isActive = true AND p.stockQuantity <= :threshold")
    List<Product> findLowStockProducts(@Param("threshold") Integer threshold);
    
    @Query("SELECT COUNT(p) FROM Product p WHERE p.isActive = true")
    long countActiveProducts();
}
```

### Product Controller
```java
@RestController
@RequestMapping("/api/products")
@RequiredArgsConstructor
@Validated
@Slf4j
public class ProductController {
    
    private final ProductService productService;
    
    @PostMapping
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ApiResponse<ProductResponse>> createProduct(
            @Valid @RequestPart("product") CreateProductRequest request,
            @RequestPart(value = "images", required = false) List<MultipartFile> images) {
        
        ProductResponse product = productService.createProduct(request, images);
        return ResponseEntity.status(HttpStatus.CREATED)
            .body(ApiResponse.success(product, "Product created successfully"));
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<ApiResponse<ProductResponse>> getProductById(@PathVariable Long id) {
        ProductResponse product = productService.getProductById(id);
        return ResponseEntity.ok(ApiResponse.success(product));
    }
    
    @PutMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ApiResponse<ProductResponse>> updateProduct(
            @PathVariable Long id,
            @Valid @RequestBody UpdateProductRequest request) {
        
        ProductResponse product = productService.updateProduct(id, request);
        return ResponseEntity.ok(ApiResponse.success(product, "Product updated successfully"));
    }
    
    @DeleteMapping("/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ApiResponse<Void>> deleteProduct(@PathVariable Long id) {
        productService.deleteProduct(id);
        return ResponseEntity.ok(ApiResponse.success("Product deleted successfully"));
    }
    
    @GetMapping
    public ResponseEntity<ApiResponse<Page<ProductResponse>>> getAllProducts(
            @RequestParam(required = false) String query,
            @RequestParam(required = false) Long categoryId,
            @RequestParam(required = false) BigDecimal minPrice,
            @RequestParam(required = false) BigDecimal maxPrice,
            @RequestParam(required = false, defaultValue = "false") Boolean inStockOnly,
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "20") int size,
            @RequestParam(defaultValue = "createdAt") String sortBy,
            @RequestParam(defaultValue = "desc") String sortDir) {
        
        ProductSearchRequest searchRequest = ProductSearchRequest.builder()
            .query(query)
            .categoryId(categoryId)
            .minPrice(minPrice)
            .maxPrice(maxPrice)
            .inStockOnly(inStockOnly)
            .build();
        
        Sort.Direction direction = sortDir.equalsIgnoreCase("desc") ? 
            Sort.Direction.DESC : Sort.Direction.ASC;
        Pageable pageable = PageRequest.of(page, size, Sort.by(direction, sortBy));
        
        Page<ProductResponse> products = productService.getAllProducts(searchRequest, pageable);
        return ResponseEntity.ok(ApiResponse.success(products));
    }
    
    @GetMapping("/featured")
    public ResponseEntity<ApiResponse<Page<ProductResponse>>> getFeaturedProducts(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "12") int size) {
        
        Pageable pageable = PageRequest.of(page, size);
        Page<ProductResponse> products = productService.getFeaturedProducts(pageable);
        return ResponseEntity.ok(ApiResponse.success(products));
    }
    
    @PatchMapping("/{id}/stock")
    @PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<ApiResponse<ProductResponse>> updateStock(
            @PathVariable Long id,
            @Valid @RequestBody UpdateStockRequest request) {
        
        ProductResponse product = productService.updateStock(id, request.getQuantity());
        return ResponseEntity.ok(ApiResponse.success(product, "Stock updated successfully"));
    }
}
```

---

## ⚙️ Configuration Files

### Application Configuration (application.yml)
```yaml
server:
  port: 8080
  servlet:
    context-path: /api

spring:
  application:
    name: mon-petit-bazaar
  
  datasource:
    url: jdbc:postgresql://localhost:5432/monpetitbazaar
    username: ${DB_USERNAME:admin}
    password: ${DB_PASSWORD:password}
    driver-class-name: org.postgresql.Driver
    
  jpa:
    hibernate:
      ddl-auto: validate
    show-sql: false
    properties:
      hibernate:
        dialect: org.hibernate.dialect.PostgreSQLDialect
        format_sql: true
        jdbc:
          time_zone: UTC
          
  flyway:
    enabled: true
    baseline-on-migrate: true
    locations: classpath:db/migration
    
  redis:
    host: localhost
    port: 6379
    timeout: 2000ms
    lettuce:
      pool:
        max-active: 8
        max-idle: 8
        min-idle: 0
        
  cache:
    type: redis
    redis:
      time-to-live: 600000 # 10 minutes
      
  servlet:
    multipart:
      max-file-size: 10MB
      max-request-size: 50MB
      
  mail:
    host: smtp.gmail.com
    port: 587
    username: ${EMAIL_USERNAME}
    password: ${EMAIL_PASSWORD}
    properties:
      mail:
        smtp:
          auth: true
          starttls:
            enable: true

# JWT Configuration
app:
  jwt:
    secret: ${JWT_SECRET:mySecretKey}
    expiration: 86400000 # 24 hours
    refresh-expiration: 2592000000 # 30 days

# Stripe Configuration
stripe:
  api-key: ${STRIPE_API_KEY}
  webhook-secret: ${STRIPE_WEBHOOK_SECRET}

# Cloudinary Configuration
cloudinary:
  cloud-name: ${CLOUDINARY_CLOUD_NAME}
  api-key: ${CLOUDINARY_API_KEY}
  api-secret: ${CLOUDINARY_API_SECRET}

# Actuator Configuration
management:
  endpoints:
    web:
      exposure:
        include: health,info,metrics,prometheus
  endpoint:
    health:
      show-details: when_authorized
  info:
    env:
      enabled: true

logging:
  level:
    com.monpetitbazaar: DEBUG
    org.springframework.security: DEBUG
  pattern:
    console: "%d{HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n"
    file: "%d{ISO8601} [%thread] %-5level %logger{36} - %msg%n"
  file:
    name: logs/application.log
```

### Security Configuration
```java
@Configuration
@EnableWebSecurity
@EnableMethodSecurity(prePostEnabled = true)
@RequiredArgsConstructor
public class SecurityConfig {
    
    private final JwtAuthenticationEntryPoint jwtAuthenticationEntryPoint;
    private final JwtAuthenticationFilter jwtAuthenticationFilter;
    private final CustomUserDetailsService customUserDetailsService;
    
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
    
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) 
            throws Exception {
        return config.getAuthenticationManager();
    }
    
    @Bean
    public DaoAuthenticationProvider authenticationProvider() {
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        authProvider.setUserDetailsService(customUserDetailsService);
        authProvider.setPasswordEncoder(passwordEncoder());
        return authProvider;
    }
    
    @Bean
    public SecurityFilterChain filterChain(HttpSecurity http) throws Exception {
        http.cors(Customizer.withDefaults())
            .csrf(csrf -> csrf.disable())
            .exceptionHandling(ex -> ex.authenticationEntryPoint(jwtAuthenticationEntryPoint))
            .sessionManagement(session -> session.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
            .authorizeHttpRequests(authz -> authz
                .requestMatchers("/api/auth/**").permitAll()
                .requestMatchers(HttpMethod.GET, "/api/products/**").permitAll()
                .requestMatchers(HttpMethod.GET, "/api/categories/**").permitAll()
                .requestMatchers("/api/admin/**").hasRole("ADMIN")
                .requestMatchers("/actuator/**").hasRole("ADMIN")
                .requestMatchers("/swagger-ui/**", "/v3/api-docs/**").permitAll()
                .anyRequest().authenticated()
            );
        
        http.authenticationProvider(authenticationProvider());
        http.addFilterBefore(jwtAuthenticationFilter, UsernamePasswordAuthenticationFilter.class);
        
        return http.build();
    }
    
    @Bean
    public CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOriginPatterns(Arrays.asList("*"));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST", "PUT", "DELETE", "OPTIONS"));
        configuration.setAllowedHeaders(Arrays.asList("*"));
        configuration.setAllowCredentials(true);
        
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }
}
```

---

## 🧪 Testing Strategy

### Unit Tests Example
```java
@ExtendWith(MockitoExtension.class)
class ProductServiceTest {
    
    @Mock
    private ProductRepository productRepository;
    
    @Mock
    private CategoryRepository categoryRepository;
    
    @Mock
    private ModelMapper modelMapper;
    
    @InjectMocks
    private ProductService productService;
    
    @Test
    void createProduct_ValidRequest_ReturnsProductResponse() {
        // Given
        CreateProductRequest request = CreateProductRequest.builder()
            .name("Test Product")
            .sku("TEST-001")
            .price(BigDecimal.valueOf(99.99))
            .stockQuantity(10)
            .build();
        
        Product savedProduct = Product.builder()
            .id(1L)
            .name("Test Product")
            .sku("TEST-001")
            .price(BigDecimal.valueOf(99.99))
            .stockQuantity(10)
            .build();
        
        ProductResponse expectedResponse = ProductResponse.builder()
            .id(1L)
            .name("Test Product")
            .sku("TEST-001")
            .price(BigDecimal.valueOf(99.99))
            .stockQuantity(10)
            .build();
        
        when(productRepository.existsBySku("TEST-001")).thenReturn(false);
        when(productRepository.save(any(Product.class))).thenReturn(savedProduct);
        when(modelMapper.map(savedProduct, ProductResponse.class)).thenReturn(expectedResponse);
        
        // When
        ProductResponse result = productService.createProduct(request, null);
        
        // Then
        assertThat(result).isNotNull();
        assertThat(result.getName()).isEqualTo("Test Product");
        assertThat(result.getSku()).isEqualTo("TEST-001");
        
        verify(productRepository).existsBySku("TEST-001");
        verify(productRepository).save(any(Product.class));
    }
    
    @Test
    void createProduct_DuplicateSku_ThrowsBadRequestException() {
        // Given
        CreateProductRequest request = CreateProductRequest.builder()
            .name("Test Product")
            .sku("EXISTING-SKU")
            .build();
        
        when(productRepository.existsBySku("EXISTING-SKU")).thenReturn(true);
        
        // When & Then
        assertThatThrownBy(() -> productService.createProduct(request, null))
            .isInstanceOf(BadRequestException.class)
            .hasMessage("Product SKU already exists");
        
        verify(productRepository).existsBySku("EXISTING-SKU");
        verify(productRepository, never()).save(any(Product.class));
    }
}
```

### Integration Tests Example
```java
@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@TestPropertySource(properties = {
    "spring.datasource.url=jdbc:h2:mem:testdb",
    "spring.jpa.hibernate.ddl-auto=create-drop"
})
class ProductControllerIntegrationTest {
    
    @Autowired
    private TestRestTemplate restTemplate;
    
    @Autowired
    private ProductRepository productRepository;
    
    @Test
    void createProduct_ValidRequest_ReturnsCreatedProduct() {
        // Given
        CreateProductRequest request = CreateProductRequest.builder()
            .name("Integration Test Product")
            .sku("INT-001")
            .price(BigDecimal.valueOf(49.99))
            .stockQuantity(5)
            .build();
        
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        // Add JWT token for admin user
        headers.setBearerAuth("valid-admin-jwt-token");
        
        HttpEntity<CreateProductRequest> entity = new HttpEntity<>(request, headers);
        
        // When
        ResponseEntity<String> response = restTemplate.exchange(
            "/api/products",
            HttpMethod.POST,
            entity,
            String.class
        );
        
        // Then
        assertThat(response.getStatusCode()).isEqualTo(HttpStatus.CREATED);
        
        List<Product> products = productRepository.findAll();
        assertThat(products).hasSize(1);
        assertThat(products.get(0).getName()).isEqualTo("Integration Test Product");
    }
}
```

---

## 🚀 Deployment & DevOps

### Dockerfile
```dockerfile
FROM openjdk:21-jre-slim

WORKDIR /app

COPY target/mon-petit-bazaar-*.jar app.jar

EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=10s --start-period=60s --retries=3 \
  CMD curl -f http://localhost:8080/actuator/health || exit 1

ENTRYPOINT ["java", "-jar", "app.jar"]
```

### Docker Compose (Development)
```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "8080:8080"
    environment:
      - SPRING_PROFILES_ACTIVE=dev
      - DB_USERNAME=postgres
      - DB_PASSWORD=password
    depends_on:
      - postgres
      - redis
    networks:
      - app-network

  postgres:
    image: postgres:16
    environment:
      POSTGRES_DB: monpetitbazaar
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: password
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
    networks:
      - app-network

  redis:
    image: redis:7-alpine
    ports:
      - "6379:6379"
    networks:
      - app-network

volumes:
  postgres_data:

networks:
  app-network:
    driver: bridge
```

---

## ✅ Pros of Spring Boot Stack

- **🏢 Enterprise-Grade**: Battle-tested in production environments
- **🔒 Security Built-in**: Spring Security provides robust authentication & authorization
- **📊 Rich Ecosystem**: Vast library of integrations and tools
- **🧪 Testable**: Excellent testing support with Spring Boot Test
- **📈 Scalable**: Built for handling high loads and complex business logic
- **🎓 Learning Value**: Highly sought-after skill in enterprise development
- **📝 Auto-Documentation**: OpenAPI integration for automatic API docs
- **📊 Monitoring**: Built-in metrics and health checks with Actuator
- **🔧 Flexible**: Easy to customize and extend functionality
- **💼 Job Market**: High demand for Spring Boot developers

## ❌ Cons of Spring Boot Stack

- **📚 Learning Curve**: Steep learning curve for Java ecosystem newcomers
- **🐌 Startup Time**: Slower cold starts compared to lightweight frameworks
- **💾 Memory Usage**: Higher memory consumption than Node.js alternatives
- **🏗️ Complexity**: More configuration and boilerplate code
- **💰 Hosting Costs**: Requires more resources (CPU/RAM) for hosting
- **⏱️ Development Speed**: Slower initial development compared to scripting languages
- **🔧 XML Configuration**: Some legacy configurations can be verbose

---

## 📈 Performance Optimizations

### Caching Strategy
```java
@Configuration
@EnableCaching
public class CacheConfig {
    
    @Bean
    public CacheManager cacheManager() {
        RedisCacheManager.Builder builder = RedisCacheManager
            .RedisCacheManagerBuilder
            .fromConnectionFactory(redisConnectionFactory())
            .cacheDefaults(cacheConfiguration());
        return builder.build();
    }
    
    private RedisCacheConfiguration cacheConfiguration() {
        return RedisCacheConfiguration.defaultCacheConfig()
            .entryTtl(Duration.ofMinutes(10))
            .serializeKeysWith(RedisSerializationContext.SerializationPair
                .fromSerializer(new StringRedisSerializer()))
            .serializeValuesWith(RedisSerializationContext.SerializationPair
                .fromSerializer(new GenericJackson2JsonRedisSerializer()));
    }
}
```

### Database Optimizations
```java
// Use @Query for efficient database access
@Query("SELECT p FROM Product p JOIN FETCH p.category JOIN FETCH p.images WHERE p.id = :id")
Optional<Product> findByIdWithCategoryAndImages(@Param("id") Long id);

// Use projections for read-only views
public interface ProductSummaryProjection {
    Long getId();
    String getName();
    BigDecimal getPrice();
    String getPrimaryImageUrl();
}
```

---

## 🎯 Next Steps

1. **Initialize Project**: Use Spring Initializr to create base project
2. **Set up Database**: Configure PostgreSQL and Redis
3. **Implement Core Entities**: User, Product, Order, Category
4. **Create Services**: Business logic for user and product management
5. **Build Controllers**: REST APIs with proper validation
6. **Add Security**: JWT authentication and authorization
7. **Write Tests**: Unit and integration tests
8. **Deploy**: Containerize and deploy to cloud platform

This Spring Boot architecture provides a solid foundation for your e-commerce site with enterprise-grade features, security, and scalability! 🚀