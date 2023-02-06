import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./productPage.module.css";
import no_photo from "../../assets/no_photo.png";
//import AdditionBtn from "../../components/ui/additionBtn/AdditionBtn";
import ToCartBtn from "../../components/ui/toCartBtn/ToCartBtn";

function ProductPage() {
  const navigate = useNavigate();
  const id = useParams().productName;
  const [product, setProduct] = useState({});
  useEffect(() => {
    fetch(`/api/products/product/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (!data) {
          navigate("*");
        } else setProduct(data[0]);
      })
      .catch((e) => console.log(e));
  }, [id, navigate]); //Why navigate???????

  return (
    <>
      <div className={styles.navigator}>
        <Link className={styles.link} to="/">
          Home
        </Link>
        <span className={styles.link_devision}>/</span>
        <Link className={styles.link} to={`/category/${product.category}`}>
          {product.category}
        </Link>
        <span className={styles.link_devision}>/</span>
        <Link className={styles.link_active}>{product.productName}</Link>
      </div>
      <div className={styles.container}>
        <div className={styles.image_wrapper}>
          <img
            src={
              product.image
                ? `${process.env.REACT_APP_API_URL}uploads/${product.image}`
                : no_photo
            }
            alt={product.productName}
          />
        </div>
        <div className={styles.product_description}>
          {product.consist && (
            <>
              <h4>Consist:</h4>
              <p className={styles.consists}>{product.consist}</p>
            </>
          )}
          {product.description && (
            <>
              <h4>Description:</h4>
              <p className={styles.consists}>{product.description}</p>
            </>
          )}

          <h4>Price:</h4>
          <p className={styles.consists}>{`${product.price} UAH`}</p>
          {/* <AdditionBtn />*/}
          <ToCartBtn product={product} />
        </div>
      </div>
    </>
  );
}

export default ProductPage;
