import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import Errors from "./Components/Errors/Errors";
import About from "./Components/About/About";
import ContactUs from "./Components/ContactUs/ContactUs";
import Meals from "./Components/meals.jsx/Meals";
import MealCategory from "./Components/meals.jsx/MealCategory";
import MealDetails from "./Components/meals.jsx/MealDetails";
import Home from "./Components/Home/Home";

let router = createBrowserRouter([
  {
    path: "/",
    errorElement: <Errors></Errors>,
    element:<Home></Home>,
    children: [
      { path: "/about", element: <About></About> },
      { path: "/contact-us", element: <ContactUs></ContactUs> },
      {
        path: "/meals",
        loader: ()=>fetch('https://www.themealdb.com/api/json/v1/1/list.php?c=list'),
        element: <Meals></Meals>,
      },
      {
        path: "/meals/category/:category",
        loader: ({params})=>fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.category}`),
        element: <MealCategory></MealCategory>,
      },
      {
        path: "/meals/meal/:meal",
        loader: ({params})=>fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.meal}`),
        element: <MealDetails></MealDetails>,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
