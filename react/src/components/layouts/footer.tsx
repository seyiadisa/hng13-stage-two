import { Outlet } from "react-router";

export default function AppFooter() {
  return (
    <>
      <Outlet />

      <footer>
        <div>
          <h1>Kanbanize.</h1>
          <p>Manage tickets the smarter way.</p>
        </div>
        <p className="copyright">&copy; 2025 Kanbanize. All rights reserved.</p>
      </footer>
    </>
  );
}
