import { Outlet } from "react-router";
import { Fragment } from "react";
import { postContext } from "../../Component/Context/post-context";
import { useContext } from "react";
import "./home.styles.scss";
import PostedCard from "../../Component/postCard/post.component";

export default function Home() {
  const { posts } = useContext(postContext);
  console.log(posts);
  return (
    <Fragment>
      {Object.keys(posts).map((title) => (
        <div key={title} className="post-container">
          {posts[title].map((post) => (
            <div style={{ marginBottom: "30px" }}>
              <PostedCard key={post.title} post={post} />
            </div>
          ))}
        </div>
      ))}
    </Fragment>
  );
}
