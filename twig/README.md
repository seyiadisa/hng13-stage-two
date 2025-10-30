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

# Twig Implementation

This document outlines the Twig implementation of the HNG 13 Stage Two project.

## Frameworks and Libraries Used

- **Twig:** A flexible, fast, and secure template engine for PHP.
- **PHP:** A popular general-purpose scripting language especially suited to web development.
- **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.
- **Vite:** A fast build tool for modern web projects (used for compiling assets).

## Setup and Execution Steps

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/hng13-stage-two.git
    cd hng13-stage-two
    ```
2.  **Navigate to the Twig directory:**

    ```bash
    cd twig
    ```

    Create a `.env` file in the `vue` directory with the following content:

    ```
    VITE_BACKEND_URL=http://localhost:4000
    ```

    (Adjust the URL if your backend is running on a different address/port.)

    ### With Docker

    - **Start the container:**

      ```bash
      docker compose up
      ```

      Navigate to `http://localhost:8080`

    ### Without Docker

    - **Install PHP dependencies (if any, e.g., Composer for Twig):**
      ```bash
      composer install
      ```
      (Note: If Twig is used standalone without Composer, this step might be different or not needed if Twig files are directly included.)
    - **Install Node.js dependencies for asset compilation:**
      ```bash
      bun install
      ```
    - **Compile assets (Tailwind CSS, etc.):**
      ```bash
      bun run build
      ```
      (You might also have a `bun run dev` for watching changes during development.)
    - **Serve the application:**
      Since Twig is a server-side templating engine, you'll need a PHP server.

      **Using PHP's built-in web server (for development):**

      ```bash
      php -S localhost:8000 -t src
      ```

      **Using a more robust web server (e.g., Apache, Nginx):**
      Configure your web server to point to the `src` directory of this project.

      The application will typically be available at `http://localhost:8000` (or your configured domain).
