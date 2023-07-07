import instance from "@/configs/axios.config";
import React, { useEffect, useState } from "react";

const Posts = ({ posts }) => {
  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post, index) => (
        <div key={index}>
          <p>
            {post.id}. {post.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Posts;

export const getServerSideProps = async () => {
  let res = await instance({
    url: `/posts`,
    method: "GET",
  });
  return {
    props: { posts: res.data },
  };
};
