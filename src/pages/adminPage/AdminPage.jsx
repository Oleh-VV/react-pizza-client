import { useState } from "react";
import { toast } from "react-toastify";
import { BASE_URL } from "../../constants";
import styles from "./adminPage.module.css";
import axios from "axios";

function AdminPage() {
  const resetProductData = {
    category: "",
    productName: "",
    price: "",
    description: "",
    consist: "",
    image: "",
    //adds: [],
  };
  const [formProductData, setFormProductData] = useState(resetProductData);
  const onChangeProductData = (e) => {
    setFormProductData({
      ...formProductData,
      [e.target.name]: e.target.value.trim(),
    });
  };
  //const [imageFile, setImageFile] = useState("");
  //const fileUploadingHandler = (e) => { setImageFile(e.target.files[0]); };
  const onSubmitHandlerProduct = (e) => {
    e.preventDefault();
    console.log(formProductData);
    if (
      formProductData.category === "no_category" ||
      formProductData.category === ""
    ) {
      return toast.error("Choose category!");
    }
    //let formData = new FormData();
    //formData.append("my_file", imageFile);

    axios
      .post(BASE_URL + "/api/upload/product", {
        headers: { "Content-Type": "multipart/form-data" },
        data: formProductData,
      })
      .then((response) => {
        console.log(response.data);
        setFormProductData(resetProductData);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Adding product</h2>
      <form className={styles.form} onSubmit={onSubmitHandlerProduct}>
        <div className={styles.form_element}>
          <label className={styles.label}>Category</label>
          {/* <input
            title="This field is mandatory"
            type="text"
            value={formProductData.category}
            name="category"
            onChange={onChangeProductData}
  />*/}
          <select
            required
            name="category"
            title="This field is mandatory"
            onChange={onChangeProductData}
          >
            <option value="no_category" defaultValue disabled>
              Choose category
            </option>
            <option value="pizza">Pizza</option>
            <option value="vegan">Vegan</option>
            <option value="salads">Salads</option>
            <option value="desserts">Desserts</option>
            <option value="drinks">Drinks</option>
          </select>
        </div>
        <div className={styles.form_element}>
          <label className={styles.label}>Product name</label>
          <input
            required
            title="This field is mandatory"
            type="text"
            value={formProductData.productName}
            name="productName"
            onChange={onChangeProductData}
          />
        </div>
        <div className={styles.form_element}>
          <label className={styles.label}>Price</label>
          <input
            required
            title="This field is mandatory"
            type="number"
            value={formProductData.price}
            name="price"
            onChange={onChangeProductData}
          />
        </div>
        <div className={styles.form_element}>
          <label className={styles.label}>Description</label>
          <input
            title="This field is mandatory"
            type="text"
            value={formProductData.description}
            name="description"
            onChange={onChangeProductData}
          />
        </div>
        <div className={styles.form_element}>
          <label className={styles.label}>Consist</label>
          <input
            required
            title="This field is mandatory"
            type="text"
            value={formProductData.consist}
            name="consist"
            onChange={onChangeProductData}
          />
        </div>
        <div className={styles.form_element}>
          <label className={styles.label}>Image name</label>
          <input
            required
            title="This field is mandatory"
            type="text"
            value={formProductData.image}
            name="image"
            onChange={onChangeProductData}
          />{" "}
        </div>
        <div className={styles.form_element}>
          <label className={styles.label}>Image</label>
          <input
            disabled
            title="This field is mandatory"
            type="file"
            accept="image/*,.png,.jpg,.web"
            name="image"
            onChange={onChangeProductData}
          />
        </div>
        <div className={styles.btn_wrapper}>
          <button type="submit" className={styles.btn}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default AdminPage;
