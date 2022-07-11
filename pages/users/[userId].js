import { useRouter } from "next/router";
import styles from "../../styles/Home.module.css";

function UserDetails() {
  const router = useRouter();
  const userId = router.query.userId;
  return <h1 className={styles.title}>User {userId}</h1>;
}

export default UserDetails;
