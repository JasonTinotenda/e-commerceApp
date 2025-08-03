# Tomato Food Delivery App

A React-based food delivery web application that allows users to browse menus, add items to cart, and place orders.

## Features

- Browse food items by categories
- Add/remove items to cart
- Real-time cart total calculation  
- Responsive design for all devices
- User authentication popup
- Checkout and order placement
- Mobile app download section

## Tech Stack

- React 18.2
- React Router DOM 6.23
- Vite
- CSS Modules

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/e-commerceApp.git
cd e-commerceApp
```

2. Install dependencies:
```bash 
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```

## Project Structure

```
src/
  ├── assets/      # Images and asset exports
  ├── components/  # Reusable UI components
  ├── context/     # React context providers
  ├── pages/       # Route pages
  └── App.jsx      # Root component
```

## Main Components

- `Navbar` - Navigation and cart icon
- `FoodDisplay` - Displays food items grid
- `ExploreMenu` - Category selection menu
- `Cart` - Shopping cart management
- `PlaceOrder` - Order checkout form
- `LoginPopup` - Authentication modal

## State Management

Uses React Context (`StoreContext`) for:
- Cart items state
- Food menu data
- Add/remove cart items
- Calculate cart totals

## API Documentation

### Base URL
```
https://api.tomatoapp.com/v1
```

### Authentication
All API requests require a Bearer token in the Authorization header:
```
Authorization: Bearer <your_token>
```

### Endpoints

#### Authentication
```
POST /auth/login
```
```json
{
  "email": "string",
  "password": "string"
}
```

```
POST /auth/register
```
```json
{
  "name": "string",
  "email": "string",
  "password": "string"
}
```

#### Food Items
```
GET /menu
```
Returns all food items with categories.

```
GET /menu/categories
```
Returns available food categories.

```
GET /menu/items/:id
```
Returns details for a specific food item.

#### Cart & Orders
[Previous cart and order endpoints...]

## Development Guide

### Environment Setup
Required environment variables:
```
VITE_API_URL=your_api_url
VITE_STRIPE_KEY=your_stripe_key
VITE_GA_ID=your_analytics_id
```

### Scripts
```bash
npm run dev        # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run test      # Run tests
npm run lint      # Run ESLint
```

### Code Style
- ESLint configuration extends Airbnb
- Prettier for code formatting
- CSS Modules for styling
- Component-specific styles in separate files

### Testing
Using Jest and React Testing Library:
```bash
npm run test           # Run all tests
npm run test:watch    # Watch mode
npm run test:coverage # Coverage report
```

### CI/CD Pipeline
GitHub Actions workflow:
1. Code linting
2. Run tests
3. Build check
4. Deploy to staging/production

### Deployment
Production build process:
1. Environment validation
2. Asset optimization
3. Bundle analysis
4. Deployment to CDN

### Performance Optimization
- Code splitting by route
- Lazy loading of images
- Service Worker for offline support
- Asset preloading
- Memory leak prevention

### Security Measures
- HTTPS enforced
- XSS protection
- CSRF tokens
- Rate limiting
- Input sanitization
- Secure HTTP headers

## Contributing

1. Fork the repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Open pull request

Follow commit message convention:
- feat: New feature
- fix: Bug fix
- docs: Documentation
- style: Formatting
- refactor: Code restructuring
- test: Tests
- chore: Maintenance

## Error Handling

### Client-Side Errors
```javascript
{
  "error": {
    "code": "CLIENT_ERROR",
    "message": "Invalid input",
    "details": {...}
  }
}
```

### Server-Side Errors
```javascript
{
  "error": {
    "code": "SERVER_ERROR",
    "message": "Internal server error",
    "reference": "ERR_ID_123"
  }
}
```

## Browser Support
- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## License

MIT License