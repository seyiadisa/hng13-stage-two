# Vue Implementation

This document outlines the Vue.js implementation of the HNG 13 Stage Two project.

## Frameworks and Libraries Used

- **Vue.js 3:** The progressive JavaScript framework used for building user interfaces.
- **Vue Router:** The official router for Vue.js.
- **Zod:** For type schema validation.
- **Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.
- **Vite:** A fast build tool for modern web projects.

## Setup and Execution Steps

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/hng13-stage-two.git
    cd hng13-stage-two
    ```
2.  **Navigate to the Vue directory:**
    ```bash
    cd vue
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
