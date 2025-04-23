import React, { useState } from "react";
import styles from "./LoginForm.module.css";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../../services/authService";
import { useAuth } from "../../contexts/AuthContext";
import Loading from "../LoadingIndicator/Loading";

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUserInfo } = useAuth();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    setLoading(true);
    e.preventDefault();
    const res = await loginApi(email, password);

    if (res.status === 200) {
      console.log(res.data);
      
      setUserInfo(res.data);
      navigate("/project/dashboard");
    } else {
      alert(res.message || "Đăng nhập thất bại");
    }
    setLoading(false);
  };
  
  if (loading) return <Loading />;

  return (
    <main className={styles.loginContainer}>
      <div className={styles.loginCard}>
        <div className={styles.imageWrapper}>
          <img
            src="/images/login.jpg"
            alt="https://placehold.co/800x800"
            className={styles.loginImage}
          />
        </div>
        <div className={styles.formWrapper}>
          <h1 className={styles.formTitle}>Welcome Back</h1>
          <form onSubmit={handleSubmit}>
            <div className={styles.inputGroup}>
              <label htmlFor="email" className={styles.inputLabel}>
                Email
              </label>
              <input
                className={styles.inputField}
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
