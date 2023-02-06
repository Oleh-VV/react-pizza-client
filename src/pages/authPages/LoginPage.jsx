import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { AppContext } from "../../contexts/AppContext";
import styles from "./auth.module.css";

function LoginPage() {
  const { dispatchUser } = useContext(AppContext);

  const [formData, setFormData] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    let reEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    if (!reEmail.test(formData.email)) {
      return toast.error("Enter correct email.");
    }
    if (formData.password.length < 6) {
      return toast.error("Password must be at least 6 symbols!");
    }
    axios
      .post("/api/auth/login", { ...formData })
      .then((response) => {
        Object.entries(response.data).map((item) =>
          localStorage.setItem(item[0], item[1])
        );
        localStorage.setItem("isAuth", "true");
        dispatchUser({
          type: "SIGN_IN_USER",
          payload: { ...response.data, isAuth: true },
        });
      })
      .catch((e) => {
        toast.error(e.response.data.message);
        console.log(e);
      });
    setFormData({ email: "", password: "" });
    navigate("/");
  };
  return (
    <div className={styles.container}>
      <form
        className={styles.form}
        onSubmit={onSubmitHandler}
        autoComplete="none"
      >
        <div className={styles.form_element}>
          <label className={styles.label}>Email</label>
          <input
            required
            title="This field is mandatory"
            type="email"
            value={formData.email}
            name="email"
            autoComplete="none"
            onChange={onChange}
            className={styles.input}
          />
        </div>
        <div className={styles.form_element}>
          <label className={styles.label}>Password</label>
          <input
            required
            title="This field is mandatory"
            type="password"
            value={formData.password}
            name="password"
            autoComplete="new-password"
            onChange={onChange}
            className={styles.input}
          />
        </div>
        <span className={styles.forgot_pass}>Forgot password</span>
        <div className={styles.btn_wrapper}>
          <button type="submit" className={styles.btn}>
            Sign in
          </button>
        </div>
      </form>
      <Link to="/registration">
        <p>If you don't have an accaunt yet, click here!</p>
      </Link>
    </div>
  );
}

export default LoginPage;

/*import { Link } from "react-router-dom";
import styles from "./login.module.css";
import React from "react";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ReactComponent as ArrowRightIcon } from "../assets/svg/keyboardArrowRightIcon.svg";
//import { toast } from "react-toastify";
import visibilityIcon from "../assets/svg/visibilityIcon.svg";
import OAuth from "../components/OAuth";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const navigate = useNavigate();
  const onChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log(userCredential);
      console.log(userCredential.user);
      if (userCredential.user) {
        navigate("/");
      }
    } catch (error) {
      console.log("OOOPS");
      console.log(error);
      toast.error("Ooops!");
    }
  };
  return (
    <>
      <div className="pageContainer">
        <header>
          <p className="'pageHeader">Welcome Back!</p>
        </header>
        <form onSubmit={onSubmit}>
          <input
            type="email"
            className="emailInput"
            placeholder="Email"
            id="email"
            value={email}
            onChange={onChange}
          />
          <div className="passwordInputDiv">
            <input
              type={showPassword ? "text" : "password"}
              className="passwordInput"
              placeholder="Password"
              id="password"
              value={password}
              onChange={onChange}
            />
            <img
              src={visibilityIcon}
              alt="show password"
              className="showPassword"
              onClick={() => setShowPassword((prev) => !prev)}
            />
          </div>
          <Link to="/forgot-password" className="forgotPasswordLink">
            Forgot Password
          </Link>
          <div className="signInBar">
            {" "}
            <p className="signInText">Sign In</p>
            <button className="signInButton">
              <ArrowRightIcon fill="#ffffff" width="34px" height="34px" />
            </button>
          </div>
        </form>
        <OAuth />
        <Link to="/sign-up" className="registerLink">
          Sign Up Instead
        </Link>
      </div>
    </>
  );
}

export default LoginPage;
*/
