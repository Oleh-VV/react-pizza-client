import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { AppContext } from "../../contexts/AppContext";
import { BASE_URL } from "../../constants";
import styles from "./auth.module.css";

function RegistrationPage() {
  const { dispatchUser } = useContext(AppContext);
  //const [user, setUser] = useState(null);
  const resetData = {
    email: "",
    password: "",
    confirmPassword: "",
    name: "",
    surname: "",
    adress: "",
    phone: "",
  };
  const navigate = useNavigate();
  const [formData, setFormData] = useState(resetData);
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
    if (formData.password !== formData.confirmPassword) {
      return toast.error("Field of Confirm password does not match Password!");
    }
    if (
      formData.surname.length === 0 ||
      formData.name.length === 0 ||
      formData.adress.length === 0 ||
      formData.phone.length === 0
    ) {
      return toast.error("All fields must be filled!");
    }
    if (formData.phone.length < 10) {
      return toast.error("Enter correct phone number.");
    }
    axios
      .post(BASE_URL + "/api/auth/registration", { ...formData })
      .then((response) => {
        Object.entries(response.data).map((item) =>
          localStorage.setItem(item[0], item[1])
        );
        localStorage.setItem("isAuth", "true");
        dispatchUser({
          type: "SIGN_IN_USER",
          payload: { ...response.data, isAuth: true },
        });
        setFormData(resetData);
        navigate("/");
      })
      .catch((e) => console.log(e));
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Registration</h2>
      <form className={styles.form} onSubmit={onSubmitHandler}>
        <div className={styles.form_element}>
          <label className={styles.label}>Email</label>
          <input
            required
            title="This field is mandatory"
            type="email"
            value={formData.email}
            name="email"
            autoComplete="off"
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
        <div className={styles.form_element}>
          <label className={styles.label}>Confirm password</label>
          <input
            required
            title="This field is mandatory"
            type="password"
            value={formData.confirmPassword}
            name="confirmPassword"
            onChange={onChange}
            className={styles.input}
          />
        </div>
        <div className={styles.form_element}>
          <label className={styles.label}>Name</label>
          <input
            required
            title="This field is mandatory"
            type="text"
            value={formData.name}
            name="name"
            onChange={onChange}
            className={styles.input}
          />
        </div>
        <div className={styles.form_element}>
          <label className={styles.label}>Surname</label>
          <input
            required
            title="This field is mandatory"
            type="text"
            value={formData.surname}
            name="surname"
            onChange={onChange}
            className={styles.input}
          />
        </div>
        <div className={styles.form_element}>
          <label className={styles.label}>Adress</label>
          <input
            required
            title="This field is mandatory"
            type="text"
            value={formData.adress}
            name="adress"
            onChange={onChange}
            className={styles.input}
          />
        </div>
        <div className={styles.form_element}>
          <label className={styles.label}>Phone number</label>
          <input
            required
            title="This field is mandatory"
            type="number"
            value={formData.phone}
            name="phone"
            onChange={onChange}
            className={styles.input}
          />
        </div>
        <div className={styles.btn_wrapper}>
          <button type="submit" className={styles.btn}>
            Send
          </button>
        </div>
      </form>
      <Link to="/login">
        <p>If you already have an account, click here!</p>
      </Link>
    </div>
  );
}

export default RegistrationPage;
