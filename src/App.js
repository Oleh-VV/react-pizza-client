import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainLayout from "./components/layout/main_layout/MainLayout";
import HomePage from "./pages/home/HomePage";
import ProductPage from "./pages/productPage/ProductPage";
import AboutPage from "./pages/aboutPage/AboutPage";
import ContactsPage from "./pages/contactsPage/ContactsPage";
import CategoryPage from "./pages/categotyPage/CategoryPage";
import LoginPage from "./pages/authPages/LoginPage";
import RegistrationPage from "./pages/authPages/RegistrationPage";
import OrderPage from "./pages/orderPage/OrderPage";
import NotFoundPage from "./pages/notFoundPage/NotFoundPage";
import AdminPage from "./pages/adminPage/AdminPage";
import AccountPage from "./pages/authPages/AccountPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/product/:productName" element={<ProductPage />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contacts" element={<ContactsPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/account" element={<AccountPage />} />
          <Route path="/order" element={<OrderPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        closeOnClick={true}
        pauseOnHover={true}
      />
    </BrowserRouter>
  );
}

export default App;
