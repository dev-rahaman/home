"use client";
import Link from "next/link";
import "./login.css";

const Login = () => {
  const handleLoginForm = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    const formData = { email, password };

    fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLoginForm} className="login-form" id="loginForm">
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />
        </div>
        <div className="form-group">
          <button type="submit" onclick="submitLoginForm()">
            Login
          </button>
        </div>
      </form>
      <p>
        Don`t have an Account?
        <Link href="/dashboard/authorization/registration">Register Now</Link>
      </p>
    </div>
  );
};

export default Login;
