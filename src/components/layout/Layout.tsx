
import React from 'react';

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="app-container">
      {/* ... */}
      <main className="main-content">{children}</main>
      {/* ... */}
    </div>
  );
};

export default Layout;