import {useRouter} from "next/router";
import blogData from "../../../public/blog.json";
import styles from "../page.module.css";

export default function BlogPost() {
  const router = useRouter();
  const postId = router.query.id;
  const post = blogData.find((p) => p.id === postId);

  if (!post) {
    return <p className={styles.container}>Post not found</p>;
  }
  console.log(post);

  return (
    <div className={styles.container}>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <p>Date: {post.date}</p>
    </div>
  );
}
