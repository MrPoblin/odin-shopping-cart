import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes";
import './index.css'
import CartItems from "./components/CartItems";

const router = createBrowserRouter(routes);



createRoot(document.getElementById("root")).render(
  // <StrictMode>
      <CartItems>
        <RouterProvider router={router} />
      </CartItems>
  /* </StrictMode>, */
);
