import { useContext } from "react";
import { Fragment } from "react";
import { postContext } from "../../Component/Context/post-context";
import "./home.styles.scss";
import PostedCard from "../../Component/postCard/post.component";

export default function Home() {
  const { posts } = useContext(postContext);

  console.log(posts);
  return (
    <Fragment>
      {Object.keys(posts).map((title) => (
        <div
          key={title}
          style={{ marginBottom: "30px" }}
          className="post-container"
        >
          <PostedCard post={posts[title]} />
        </div>
      ))}
    </Fragment>
  );
}
