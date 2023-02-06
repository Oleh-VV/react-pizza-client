import { Link, useParams, useNavigate } from "react-router-dom";
import styles from "./category.module.css";
import Product from "../../components/product/Product";
import { useEffect, useState } from "react";

function CategoryPage() {
  const navigate = useNavigate();
  const category = useParams().categoryName;
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(
      `https://pizza-react-server-production.up.railway.app/api/products/category/${category}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.length === 0) {
          navigate("*");
        } else setProducts(data);
      })
      .catch((e) => console.log(e));
  }, [category, navigate]);
  return (
    <div className={styles.container}>
      <div className={styles.navigator}>
        <Link className={styles.link} to="/">
          Home
        </Link>
        <span className={styles.link_devision}>/</span>
        <Link className={styles.link_active}>{category}</Link>
      </div>
      {products && (
        <div className={styles.categories}>
          {products.map((product) => {
            return <Product key={product._id} product={product} />;
          })}
        </div>
      )}
    </div>
  );
}

export default CategoryPage;
