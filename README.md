# Kanbanize - hng13-stage-two

This repository contains the Stage Two project for HNG 13, ticket management application. The project is implemented using three different frontend frameworks: React, Vue, and Twig (with PHP).

## Project Structure

The project is organized into subdirectories for each framework implementation:

- `react/`: Contains the React.js implementation.
- `vue/`: Contains the Vue.js implementation.
- `twig/`: Contains the Twig (PHP) implementation.

## Instructions for Switching Between Versions

To switch between the React, Vue, and Twig versions, navigate into the respective directory and follow the setup and execution steps outlined in each framework's `README.md` file.

## Required Runtime

This project uses [Bun](https://bun.com) as its JavaScript runtime and package manager. Please ensure you have Bun installed to run the applications.

For example, to run the React version:

```bash
cd react
bun install
bun run dev
```

To run the Vue version:

```bash
cd vue
bun install
bun run dev
```

To run the Twig version:

```bash
cd twig
# Follow instructions in twig/README.md for Docker or local PHP setup
```

## Backend Setup

This project requires a backend API to function correctly. The backend is located in the `backend-api` directory.

1.  **Navigate to the backend directory:**
    ```bash
    cd backend-api
    ```
2.  **Install dependencies:**
    ```bash
    bun install
    ```
3.  **Run the backend server:**
    ```bash
    bun run server.js
    ```
    The backend API will typically be available at `http://localhost:4000`. Ensure this is running before starting any of the frontend applications.

## Notes on Accessibility and Known Issues

- **Error Handling:** The current error handling is basic and not robust. Users might encounter generic error messages or unexpected behavior in certain error scenarios.
- **Refresh Token Implementation:** There is no refresh token mechanism implemented, which means user sessions might expire, requiring re-authentication.
- **Basic UI:** The user interface is functional but basic, lacking advanced styling, animations, or complex interactions.
- **Validation:** While Zod is used for schema validation, the overall input validation across the application might not cover all edge cases or provide comprehensive user feedback.

## Example Test User Credentials

You can create an account on the live deployments to test the application.

- **Live React Deployment:** [https://stage-two-react.netlify.app/](https://stage-two-react.netlify.app/)
- **Live Vue Deployment:** [https://stage-two-vue.netlify.app/](https://stage-two-vue.netlify.app/)
- **Live Twig Deployment:** [https://stage-two-twig-app.onrender.com](https://stage-two-twig-app.onrender.com)
