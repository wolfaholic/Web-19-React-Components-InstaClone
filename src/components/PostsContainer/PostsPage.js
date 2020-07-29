//Complete the necessary code in this file
// import useState
import React from "react";
import Post from "./Post";
import "./Posts.css";

 
const PostsPage = (props) => {
  return (
    <div className="posts-container-wrapper">
      {props.newdata.map(i =>
        <Post post={i} />
      )}
      
    </div>
  );
};

export default PostsPage;

