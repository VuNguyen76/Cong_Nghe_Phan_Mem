/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";

const CreateUser = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    email: "",
    first_name: "",
    last_name: "",
  });
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/users/create/",
        userData
      );
      setMessage("User created successfully!");
      setError("");
    } catch (err) {
      setError(
        "Error creating user: " + err.response?.data?.detail || "Unknown error"
      );
      setMessage("");
    }
  };

  return (
    <div className="authentic-layout create-layout centerScreen">
      <h1 className="authentic-heading">Create User</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="first_name"
            value={userData.first_name}
            onChange={handleChange}
            required
            placeholder={"First name..."}
          />
        </div>
        <div>
          <input
            type="text"
            name="last_name"
            value={userData.last_name}
            onChange={handleChange}
            required
            placeholder={"Last name..."}
          />
        </div>
        <div>
          <input
            type="text"
            name="username"
            value={userData.username}
            onChange={handleChange}
            placeholder={"Uer name..."}
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            required
            placeholder={"Email..."}
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            required
            placeholder={"Password..."}
          />
        </div>

        <button className="authentic-btn create-btn" type="submit">
          Create User
        </button>
      </form>

      {message && <p style={{ color: "green" }}>{message}</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default CreateUser;
