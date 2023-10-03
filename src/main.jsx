import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import NotFound from "./Components/NotFound";
import Root from "./Root";
import About from "./Pages/About/About";
import ProductDetail from "./Pages/ProductDetail/ProductDetail";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Login/Register";
import AuthProvider from "./Provider/AuthProvider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import Blog from "./Pages/Blog/Blog";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: '',
        element: <Home />
      },
      {
        path: 'products',
        element: <PrivateRoute><Products /></PrivateRoute>
      },
      {
        path: 'blog',
        element: <PrivateRoute><Blog /></PrivateRoute>
      },
      {
        path: 'product/:id',
        element: <PrivateRoute>
          <ProductDetail />
        </PrivateRoute>
      },
      {
        path: 'about',
        element: <PrivateRoute><About /></PrivateRoute>
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'register',
        element: <Register />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);