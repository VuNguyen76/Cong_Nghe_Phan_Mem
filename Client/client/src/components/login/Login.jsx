import React, { useState } from "react";
import axios from "axios";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault(); // Ngăn chặn form gửi mặc định
    try {
      const response = await axios.post("http://localhost:8000/api/login/", {
        username: username,
        password: password,
      });
      setMessage(response.data.message);
      setError("");
    } catch (err) {
      setError(err.response?.data?.error || "Something went wrong!");
      setMessage("");
    }
  };

  return (
    <div className="authentic-layout login-layout centerScreen">
      <h1 className="authentic-heading">Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <input
            id="name"
            type="text"
            placeholder="Enter user name..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="input-name"
          />
        </div>
        <br />
        <div>
          <input
            id="password"
            type="password"
            placeholder="Enter password..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="input-password"
          />
        </div>
        <br />
        <button
          type="submit"
          className="authentic-btn btn-login"
          onClick={handleLogin}
        >
          Login
        </button>
      </form>
      {message && <p className="success-message">{message}</p>}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
}
