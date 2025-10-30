<!--
 Required Documentation
Each framework implementation must include a README.md containing:
A list of frameworks and libraries used.
Setup and execution steps for each version.
Instructions for switching between React, Vue, and Twig versions.
Short explanation of UI components and state structure.
Notes on accessibility and known issues.
Example test user credentials.
 -->

# React Implementation

This document outlines the React.js implementation of the HNG 13 Stage Two project.

## Frameworks and Libraries Used

- **React.js:** A JavaScript library for building user interfaces.
- **React Router:** Declarative routing for React.
- **Zod:** For type schema validation.
- **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.
- **Vite:** A fast build tool for modern web projects.

## Setup and Execution Steps

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/hng13-stage-two.git
    cd hng13-stage-two
    ```
2.  **Navigate to the React directory:**
    ```bash
    cd react
    ```
3.  **Install dependencies:**
    ```bash
    bun install
    ```
    Create a `.env` file in the `vue` directory with the following content:
    ```
    VITE_BACKEND_URL=http://localhost:4000
    ```
    (Adjust the URL if your backend is running on a different address/port.)
4.  **Run the development server:**

    ```bash
    bun run dev
    ```

    The application will typically be available at `http://localhost:5173`.

5.  **Build for production:**

    ```bash
    bun run build
    ```
