import { Outlet } from "react-router-dom";
import React from "react";

function RootLayout() {
  return (
    <React.Fragment>
      <nav>Nav</nav>
      <header>Header</header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </React.Fragment>
  );
}

export default RootLayout;
