import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Layout from './components/Layout';
import Home from './pages/Home';
import Admin from './pages/Admin';
import Owner from './pages/Owner';
import User from './pages/User';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: (
      <div>
        <h1>404 - Page Not found</h1>
      </div>
    ),
    children: [
      {path: "/", element: <Home />},
      {path: "home", element: <Home />},
      {path: "admin", element: <Admin />},
      {path: "owner", element: <Owner />},
      {path: "user", element: <User />}
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
}

export default App