# Coding Standards

This document outlines the coding standards and best practices for all development projects at Gray Bay Solutions.

## General Principles

### Code Quality
- **Write self-documenting code** - Code should be readable without extensive comments
- **Keep functions small and focused** - Single responsibility principle
- **Use meaningful names** - Variables, functions, and classes should clearly describe their purpose
- **Avoid deep nesting** - Use early returns and guard clauses
- **Handle errors gracefully** - Always handle potential failures

### Performance
- **Optimize for readability first** - Premature optimization is the root of all evil
- **Use TypeScript strictly** - Enable strict mode and address all type errors
- **Minimize dependencies** - Every dependency is a liability
- **Lazy load when appropriate** - Don't load everything upfront

## TypeScript Standards

### Type Definitions
```typescript
// ✅ Good - Explicit return types for functions
function calculateTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.price, 0)
}

// ✅ Good - Interface for object shapes
interface User {
  id: string
  name: string
  email: string
  createdAt: Date
}

// ✅ Good - Union types for limited options
type Theme = 'light' | 'dark' | 'system'
```

### Naming Conventions
- **Variables and functions**: `camelCase`
- **Types and interfaces**: `PascalCase`
- **Constants**: `UPPER_SNAKE_CASE`
- **Files**: `kebab-case.tsx` or `kebab-case.ts`
- **Components**: `PascalCase.tsx`

### File Organization
```
src/
├── components/          # Reusable UI components
│   ├── ui/             # Basic UI elements
│   └── forms/          # Form components
├── lib/                # Utility functions
├── types/              # Type definitions
├── hooks/              # Custom React hooks
└── app/                # Next.js app directory
```

## React Standards

### Component Structure
```typescript
// ✅ Good - Functional component with TypeScript
interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  onClick?: () => void
  disabled?: boolean
}

export function Button({ 
  children, 
  variant = 'primary', 
  onClick, 
  disabled = false 
}: ButtonProps) {
  return (
    <button
      className={`btn btn-${variant}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}
```

### Hooks Guidelines
- **Use custom hooks** for reusable logic
- **Keep hooks at the top** of components
- **Don't call hooks conditionally**
- **Use `useCallback` and `useMemo`** judiciously

### Component Best Practices
- **Keep components small** - Break down complex components
- **Use props destructuring** with default values
- **Prefer composition over inheritance**
- **Use TypeScript props interfaces**

## CSS/Styling Standards

### Tailwind CSS Guidelines
```typescript
// ✅ Good - Consistent spacing and naming
<div className="flex items-center gap-4 p-6 bg-white rounded-lg shadow-md">
  <Icon className="h-6 w-6 text-primary" />
  <span className="text-lg font-medium text-gray-900">
    Content
  </span>
</div>

// ✅ Good - Responsive design
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
```

### Class Organization
1. **Layout** (display, position, flex, grid)
2. **Spacing** (margin, padding)
3. **Sizing** (width, height)
4. **Typography** (font, text)
5. **Colors** (background, text, border)
6. **Effects** (shadow, transform)

## Error Handling

### Client-Side Errors
```typescript
// ✅ Good - Error boundaries for React components
try {
  const result = await apiCall()
  return result
} catch (error) {
  console.error('API call failed:', error)
  // Handle error appropriately
  return null
}
```

### Server-Side Errors
```typescript
// ✅ Good - Proper error responses
export async function GET(request: Request) {
  try {
    const data = await fetchData()
    return Response.json(data)
  } catch (error) {
    console.error('Failed to fetch data:', error)
    return Response.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
```

## Testing Standards

### Unit Tests
- **Test behavior, not implementation**
- **Use descriptive test names**
- **Follow AAA pattern**: Arrange, Act, Assert
- **Mock external dependencies**

### Integration Tests
- **Test user workflows**
- **Use realistic data**
- **Test error scenarios**

## Documentation Standards

### Code Comments
```typescript
// ✅ Good - Explain why, not what
function calculateDiscount(price: number, customerType: string): number {
  // Premium customers get additional 10% discount on bulk orders
  if (customerType === 'premium' && price > 1000) {
    return price * 0.15
  }
  return price * 0.05
}
```

### JSDoc for Public APIs
```typescript
/**
 * Formats a price value for display
 * @param price - The price in cents
 * @param currency - Currency code (default: 'USD')
 * @returns Formatted price string
 */
export function formatPrice(price: number, currency = 'USD'): string {
  // Implementation
}
```

## Git Commit Standards

### Commit Message Format
```
<type>(<scope>): <description>

[optional body]

[optional footer]
```

### Types
- **feat**: New feature
- **fix**: Bug fix
- **docs**: Documentation changes
- **style**: Code style changes
- **refactor**: Code refactoring
- **test**: Test changes
- **chore**: Build process or auxiliary tool changes

### Examples
```
feat(auth): add password reset functionality
fix(ui): resolve button alignment issue on mobile
docs(api): update authentication endpoints
```

## Performance Guidelines

### Next.js Optimization
- **Use `Image` component** for images
- **Implement lazy loading** for components
- **Optimize bundle size** with dynamic imports
- **Use proper caching strategies**

### React Optimization
- **Avoid unnecessary re-renders** with `React.memo`
- **Use `useCallback` for event handlers**
- **Implement proper key props** for lists
- **Optimize large lists** with virtualization

## Security Best Practices

- **Validate all inputs** on both client and server
- **Sanitize user data** before rendering
- **Use HTTPS everywhere**
- **Keep dependencies updated**
- **Never commit secrets** to version control

## Linting Configuration

Our ESLint configuration enforces these standards:

```json
{
  "extends": [
    "next/core-web-vitals",
    "@typescript-eslint/recommended",
    "prettier"
  ],
  "rules": {
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/explicit-return-type": "warn",
    "prefer-const": "error",
    "no-var": "error"
  }
}
```

## Tools and Automation

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **TypeScript** - Type checking
- **Husky** - Git hooks for pre-commit checks

---

*These standards are living documents. Update them as our practices evolve.* 