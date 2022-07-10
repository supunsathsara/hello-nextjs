import { useRouter } from "next/router";
import styles from "../../../styles/Home.module.css";

function userDetails() {
  const router = useRouter();
  const productId = router.query.productId;
  return <h1 className={styles.title}>Product {productId}</h1>;
}

export default userDetails;
