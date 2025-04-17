import React, { useState } from "react";
import styles from "./LoginForm.module.css";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    // Handle login logic here
  };

  return (
    <main className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <div className={styles.imageWrapper}>
          <img
            src="https://placehold.co/800x800"
            alt="Login background"
            className={styles.loginImage}
          />
        </div>
        <div className={styles.formWrapper}>
          <h1 className={styles.formTitle}>Welcome Back</h1>
          <form onSubmit={handleLogin}>
            <div className={styles.inputGroup}>
              <label htmlFor="username" className={styles.inputLabel}>
                Username
              </label>
              <input
                className={styles.inputField}
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                aria-required="true"
              />
            </div>
            <div className={styles.inputGroup}>
              <label htmlFor="password" className={styles.inputLabel}>
                Password
              </label>
              <input
                className={styles.inputField}
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                aria-required="true"
              />
            </div>
            <div className={styles.forgotPasswordWrapper}>
              <a
                className={styles.forgotPasswordLink}
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  // Handle forgot password logic
                }}
              >
                Forgot Password?
              </a>
            </div>
            <button
              className={styles.loginButton}
              type="submit"
              aria-label="Log In"
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}

export default LoginForm;
