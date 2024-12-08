import React from "react";
import { Link } from "react-router-dom";
export default function Login() {
  return (
    <nav className="nav centerScreen">
      <Link className="nav-item" to="/login">
        Login
      </Link>
      <Link className="nav-item" to="/create-account">
        Create Account
      </Link>
    </nav>
  );
}
