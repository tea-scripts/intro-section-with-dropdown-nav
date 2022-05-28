import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SidebarProvider } from './context/sidebar_context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SidebarProvider>
      <App />
    </SidebarProvider>
  </React.StrictMode>
);
