import React from "react";
import AppRoutes from "./AppRoutes";
import './App.css';

const App = () => {
  return (
    <div>
      <AppRoutes />
      {/* <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<SignUp />} />
          <Route exact path="/SignIn" element={<SignIn /> } />
        </Routes>
      </BrowserRouter> */}
    </div>
  );
};

export default App;
