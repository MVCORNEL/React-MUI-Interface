import { Outlet } from 'react-router-dom';
import React from 'react';
const UserLayout = () => {
  return (
    <React.Fragment>
      <div>User</div>
      <Outlet />
    </React.Fragment>
  );
};

export default UserLayout;
