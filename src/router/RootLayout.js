import { Outlet } from 'react-router-dom';
import React from 'react';
import Navbar from '../layout/navigation/Navbar';

/**
 * The root component where all the child routes are render, within the OUTLET element.
 * The RootLayout will be used as a place holder for all its children componenets.
 * Every single page of the appliaction will respect this structure.
 *
 */
function RootLayout() {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        <Outlet />
      </main>
      {/* FOOTER */}
    </React.Fragment>
  );
}

export default RootLayout;
