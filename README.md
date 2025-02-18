# Healthcare Website

A modern, responsive healthcare website built with React, TypeScript, and Tailwind CSS. Features include a home page, services listing, and appointment booking system.

## Features

- 🏥 Modern and responsive design
- 📱 Mobile-friendly interface
- 🔍 Services showcase
- 📅 Appointment booking system
- 🎨 Tailwind CSS styling
- ⚡ Fast performance with Vite
- 📦 TypeScript support

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version 14 or higher)
- npm (comes with Node.js)
- A modern code editor (VS Code recommended)

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd healthcare-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Development

To start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:5173` (or another port if 5173 is in use).

## Project Structure

```
healthcare-website/
├── src/
│   ├── components/      # Reusable components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── pages/          # Page components
│   │   ├── Home.tsx
│   │   ├── Services.tsx
│   │   └── Appointment.tsx
│   ├── App.tsx         # Main application component
│   ├── main.tsx        # Application entry point
│   └── index.css       # Global styles
├── public/             # Static assets
└── package.json        # Project dependencies and scripts
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code linting

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Vite
- React Router DOM
- Lucide React (for icons)

## Pages

1. **Home Page**
   - Hero section with call-to-action
   - Features showcase
   - Why choose us section

2. **Services Page**
   - List of medical services
   - Department information
   - Service descriptions

3. **Appointment Page**
   - Appointment booking form
   - Department selection
   - Date and time picker
   - Contact information fields

## Customization

### Styling

The project uses Tailwind CSS for styling. You can customize the design by:

1. Modifying `tailwind.config.js` for theme customization
2. Adding custom CSS in `src/index.css`
3. Using Tailwind classes in component files

### Adding New Pages

1. Create a new component in `src/pages`
2. Add the route in `App.tsx`
3. Update navigation in `Navbar.tsx`

## Browser Support

The website supports all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details