# Simple Bus Frontend

A simple frontend application for displaying bus information, built with React, TypeScript, and Rspack.

## 🚀 Features

- Displays a list of buses with real-time data
- Responsive design
- Built with modern web technologies
- Includes loading states and error handling
- Structured data for SEO
- Footer with developer credits

## 🛠️ Tech Stack

- [React](https://reactjs.org/) - UI library
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Rspack](https://www.rspack.dev/) - Fast Rust-based web bundler
- [React Query](https://tanstack.com/query/v5) - Data fetching and state management
- [Axios](https://axios-http.com/) - HTTP client
- [Sass](https://sass-lang.com/) - CSS preprocessing
- [Jest](https://jestjs.io/) & [React Testing Library](https://testing-library.com/) - Testing
- [ESLint](https://eslint.org/) - Code linting
- [Prettier](https://prettier.io/) - Code formatting
- [Husky](https://typicode.github.io/husky/) - Git hooks
- [Commitlint](https://commitlint.js.org/) - Commit message linting
- [Commitizen](https://commitizen-tools.github.io/commitizen/) - Conventional commits

## 📦 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/LeoGonzaga/simple-bus-frontend.git
   ```

2. Navigate to the project directory:

   ```bash
   cd simple-bus-frontend
   ```

3. Install dependencies:
   ```bash
   yarn
   ```

## 💻 Usage

Start the development server:

```bash
yarn dev
```

The application will open automatically in your browser at http://localhost:3000.

For production build:

```bash
yarn build
```

Preview the production build:

```bash
yarn preview
```

## 📜 Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn test` - Run tests
- `yarn coverage` - Generate test coverage report
- `yarn format` - Format code with Prettier
- `yarn lint` - Lint code with ESLint
- `yarn prepare` - Install Husky hooks
- `yarn cmt` - Commit with Commitizen

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── BusList/         # Bus list component
│   ├── Card/            # Card component
│   ├── Footer/          # Footer component
│   ├── Header/          # Header component
│   ├── Loader/          # Loading spinner
│   └── shared/ui/       # Shared UI components (Button, etc.)
├── features/            # Page-level components
│   └── Home/            # Home page
├── hooks/               # Custom React hooks
│   └── useGetBus.ts     # Hook for fetching bus data
├── libs/                # Library configurations
│   ├── axios.ts         # Axios instance
│   └── react-query.ts   # React Query client
├── services/            # Service layers
│   └── bus/             # Bus service
├── styles/              # Global styles
├── types/               # TypeScript type definitions
└── App.tsx              # Root component
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git cz` for conventional commits)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
