import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useLocation,
  useNavigate,
} from "react-router-dom"; // Import useNavigate
import Login from "./components/login/Login";
import CreateAccount from "./components/create-account/CreateAccount";
import LayOutLogin from "./components/layout/LayoutLogin";
function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<LayOutLogin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<CreateAccount />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
