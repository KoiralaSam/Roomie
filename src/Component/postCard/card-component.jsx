import { useContext, useState } from "react";
import { postContext } from "../Context/post-context";
import "./card.styles.scss";

export default function PostCard({ post }) {
  const { userId, imageUrl, createdAt, likes, comment, description } = post;
  return (
    <div className="card">
      <div className="card-header">{userId}</div>
      <div className="card-body">
        <img
          src={imageUrl}
          alt={description}
          style={{
            width: "100%",
            height: "95%",
            objectFit: "cover",
            marginBottom: "5px",
          }}
        />
        <p>{description}</p>
        <p>Likes: {likes}</p>
        <p>Comments: </p>
      </div>
      <button className="button">Like</button>
    </div>
  );
}
