import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const AppRoutes = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <SignUp />,
    },
    {
      path: "/signin",
      element: <SignIn />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
      {/* <Router>
        <Routes>
          <Route path="/" element={<SignUp />}></Route>
          <Route path="/SignIn" element={<SignIn />}></Route>
        </Routes>
      </Router> */}
    </div>
  );
};

export default AppRoutes;
