# GitHub Copilot Instructions for Mon Petit Bazaar

## Git Workflow - IMPORTANT

This project follows **Gitflow conventions**. All changes MUST follow this workflow:

### Step-by-Step Git Process

1. **Before starting any work:**
   ```bash
   git checkout main
   git pull --rebase origin main
   ```

2. **Create a feature branch:**
   ```bash
   git checkout -b feature/descriptive-name
   ```
   - Use `feature/` prefix for new features
   - Use `fix/` prefix for bug fixes
   - Use `docs/` prefix for documentation
   - Use `refactor/` prefix for code refactoring
   - Use `test/` prefix for tests

3. **Make changes and commit:**
   ```bash
   git add .
   git commit -m "feat(scope): description"
   ```
   
   **Commit Message Format:**
   - `feat(scope): description` - New feature
   - `fix(scope): description` - Bug fix
   - `docs(scope): description` - Documentation changes
   - `style(scope): description` - Code style/formatting
   - `refactor(scope): description` - Code refactoring
   - `test(scope): description` - Adding tests
   - `chore(scope): description` - Maintenance tasks
   
   Example scopes: `header`, `footer`, `homepage`, `legal`, `cart`, `products`, etc.

4. **Push feature branch:**
   ```bash
   git push origin feature/descriptive-name
   ```

5. **Create Pull Request:**
   - Use GitHub CLI or inform the user to create PR
   - Include description of changes
   - Reference any related issues
   - Wait for user review and approval

6. **NEVER push directly to main branch**

### Example Workflow

```bash
# Start new feature
git checkout main
git pull --rebase origin main
git checkout -b feature/add-newsletter-section

# Make changes
git add .
git commit -m "feat(homepage): add newsletter subscription section"

# Push and create PR
git push origin feature/add-newsletter-section
# Then create Pull Request for user review
```

## Code Standards

- **Language**: Use French for all user-facing content
- **Framework**: React 18.3 with Vite
- **Styling**: TailwindCSS with custom primary/accent colors
- **Components**: Functional components with hooks
- **Email**: contact@monpetitbazaar.fr
- **Domain**: https://monpetitbazaar.fr

## Project Context

- This is an **educational e-commerce project** for learning purposes
- Not a commercial business (include disclaimers in legal pages)
- Uses Docker for development environment
- Database: PostgreSQL, Cache: Redis
- Deployed via GitHub Pages with GitHub Actions

## Important Notes

- Always check for existing code before making changes
- Test locally with Docker before committing
- Keep commit messages descriptive and following conventional commits
- **ALWAYS use feature branches and Pull Requests**
- Never commit directly to main
