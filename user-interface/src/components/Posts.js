import React from "react";
import PostCards from "../raw/PostCards";
import { useSelector } from "react-redux";
import { fetchPostData } from "../redux/storeDataFetcher";

export const Posts = () => {
  const allPost = useSelector((state) => fetchPostData(state));
  return <PostCards data={allPost} />;
};
