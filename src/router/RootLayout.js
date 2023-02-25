import { Outlet } from 'react-router-dom';
import React from 'react';
import Navbar from '../layout/navigation/Navbar';

/**
 * The root component where all the child routes are render, within the OUTLET element.
 * Every single page of the appliaction will respect this structure.
 *
 */
function RootLayout() {
  return (
    <React.Fragment>
      <Navbar />
      <header>Header</header>
      <main>
        <Outlet />
      </main>
      <footer>Footer</footer>
    </React.Fragment>
  );
}

export default RootLayout;
