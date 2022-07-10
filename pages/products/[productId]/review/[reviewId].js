import { useRouter } from "next/router";
import styles from "../../../../styles/Home.module.css";

function userDetails() {
  const router = useRouter();
  const { productId, reviewId } = router.query;
  return (
    <h1 className={styles.title}>
      Review {reviewId} for product {productId}
    </h1>
  );
}

export default userDetails;
