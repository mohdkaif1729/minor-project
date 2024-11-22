import { createRoot } from "react-dom/client";
import "./index.css";
import {
  Layout,
  Home,
  About,
  ContactUs,
  OurServicesTop,
  OurProjects,
  Login,
} from "./components/index.js";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./components/Pages/SignUp.jsx";
import store from "./store/store.js";
import { Provider } from "react-redux";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about-us",
        element: <About />,
      },
      {
        path: "our-services",
        element: <OurServicesTop />,
      },
      {
        path: "our-projects",
        element: <OurProjects />,
      },
      {
        path: "contact-us",
        element: <ContactUs />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
