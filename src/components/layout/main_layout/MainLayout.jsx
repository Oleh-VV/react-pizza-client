import { Outlet } from "react-router-dom";
import Footer from "../../footer/Footer";
import Navbar from "../../header/navbar/Navbar";
import styles from "./mainLayout.module.css";

function MainLayout() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}
export default MainLayout;
