import Link from "next/link";
import blogData from "../../../public/blog.json";
import styles from "../page.module.css";

export default function Blog() {
  return (
    <div className={styles.container}>
      <h1>Blog</h1>
      <ul className={styles.blogList}>
        {blogData.map((post) => (
          <li key={post.id} className={styles.blogListItem}>
            <Link href={`/post/${post.id}`}>
              <p>{post.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
