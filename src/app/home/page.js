import Link from "next/link";
import styles from "../page.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Welcome to My Blog!</h1>
      <Link href="/blog">
        <p>Go to Blog</p>
      </Link>
    </div>
  );
}
