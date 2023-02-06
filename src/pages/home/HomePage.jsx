import styles from "./home.module.css";
import pizza_img from "../../assets/pizza.jpg";
import salads_img from "../../assets/salads.png";
import vegan_img from "../../assets/vegan.png";
import ProductCategory from "../../components/productCategory/ProductCategory";
import Slider from "../../components/slider/Slider";

function HomePage() {
  return (
    <div className={styles.container}>
      <Slider />
      <div className={styles.categories}>
        <ProductCategory
          img_URL={pizza_img}
          alt_info="category pizza"
          title="Pizza"
        />
        <ProductCategory
          img_URL={salads_img}
          alt_info="category salads"
          title="Salads"
        />
        <ProductCategory
          img_URL={vegan_img}
          alt_info="category vegan"
          title="Vegan"
        />
      </div>
    </div>
  );
}

export default HomePage;
