import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../layout/Header';

export default function Layout() {
  return (
    <div className="app-wrapper-layout">
      <Header />
      <div className="app-base">
        <div className="app-flex-layout">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
