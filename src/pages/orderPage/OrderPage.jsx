import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { toast } from "react-toastify";
import { AppContext } from "../../contexts/AppContext";
import styles from "./orderPage.module.css";
import OrderItem from "../../components/orderItem/OrderItem";
import Modal from "../../components/modals/Modal";

function OrderPage() {
  const { cartState, dispatchCart, userState } = useContext(AppContext);
  const [isOpenModal, setIsOpenModal] = useState(false);
  let deliveryPrice = 0;
  if (cartState.cartAmount !== 0) deliveryPrice = 100;
  let userData = {
    email: "",
    name: "",
    surname: "",
    adress: "",
    phone: "",
    id: "",
    message: "",
  };
  if (userState.isAuth) userData = { ...userState };
  const [formData, setFormData] = useState(userData);
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.trim() });
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    if (cartState.cartAmount === 0) {
      return toast.error("Choose the product!");
    }
    let reEmail = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i;
    if (!reEmail.test(formData.email)) {
      return toast.error("Enter correct email.");
    }
    if (
      formData.surname.length === 0 ||
      formData.name.length === 0 ||
      formData.name.adress === 0 ||
      formData.phone.length === 0
    ) {
      return toast.error("All fields must be filled!");
    }
    if (formData.phone.length < 10) {
      return toast.error("Enter correct phone number.");
    }
    dispatchCart({ type: "RESET_CART" });
    window.scrollTo(0, 0);
    setIsOpenModal(true);
  };
  return (
    <>
      <div className={styles.container}>
        {cartState.cartAmount !== 0 ? (
          <h1>Your order</h1>
        ) : (
          <h1>Make your choice!</h1>
        )}
        <div className={styles.items_wrapper}>
          {cartState.cart.map((item) => {
            if (item.amount !== 0) {
              return (
                <>
                  <OrderItem
                    item={item}
                    dispatchCart={dispatchCart}
                    key={item.id}
                  />
                  <hr />
                </>
              );
            } else return null;
          })}
        </div>
        <div className={styles.loginLink_wrapper}>
          <Link to="/login">
            <p className={styles.link}>LOGIN</p>
          </Link>
          <p className={styles.paragraf}>or fill the form below</p>
        </div>
        <div className={styles.form_container}>
          <form className={styles.form} onSubmit={onSubmitHandler}>
            <div className={styles.form_element}>
              <label className={styles.label}>Email</label>
              <input
                title="This field is mandatory"
                type="email"
                value={formData.email}
                name="email"
                onChange={onChange}
                autoComplete="new-data"
                className={styles.input}
                required
              />
            </div>
            <div className={styles.form_element}>
              <label className={styles.label}>Name</label>
              <input
                title="This field is mandatory"
                type="text"
                value={formData.name}
                name="name"
                autoComplete="new-data"
                required
                onChange={onChange}
                className={styles.input}
              />
            </div>
            <div className={styles.form_element}>
              <label className={styles.label}>Surname</label>
              <input
                title="This field is mandatory"
                type="text"
                value={formData.surname}
                name="surname"
                required
                onChange={onChange}
                className={styles.input}
              />
            </div>
            <div className={styles.form_element}>
              <label className={styles.label}>Adress</label>
              <input
                title="This field is mandatory"
                type="text"
                value={formData.adress}
                name="adress"
                required
                onChange={onChange}
                className={styles.input}
              />
            </div>
            <div className={styles.form_element}>
              <label className={styles.label}>Phone number</label>
              <input
                title="This field is mandatory"
                type="number"
                value={formData.phone}
                name="phone"
                required
                onChange={onChange}
                className={styles.input}
              />
            </div>
            <div className={styles.form_element}>
              <label className={styles.label}>Comments to delivery</label>
              <textarea
                value={formData.order_comment}
                name="message"
                onChange={onChange}
                className={styles.order_comment}
              />
            </div>
            <div className={styles.order_info}>
              Order amount:{" "}
              <span className={styles.order_info_value}>
                {cartState.cart.reduce((a, b) => a + b.amount * b.price, 0)}
              </span>{" "}
              UAH
            </div>
            <div className={styles.order_info}>
              Delivery amount:{" "}
              <span className={styles.order_info_value}>{deliveryPrice}</span>{" "}
              UAH
            </div>
            <div className={styles.order_info}>
              Total amount:{" "}
              <span className={styles.order_info_value}>
                {cartState.cart.reduce((a, b) => a + b.amount * b.price, 0) +
                  deliveryPrice}
              </span>{" "}
              UAH
            </div>
            <div className={styles.btn_wrapper}>
              <button type="submit" className={styles.btn}>
                Confirm Order
              </button>
            </div>
          </form>
        </div>
      </div>
      <Modal
        text="Thank you for your order! We`ll contact you)"
        isOpen={isOpenModal}
        setIsOpen={setIsOpenModal}
      />
    </>
  );
}

export default OrderPage;
