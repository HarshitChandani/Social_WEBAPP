import React, { useEffect } from "react";
import PostCards from "../raw/PostCards";
import { useDispatch, useSelector } from "react-redux";
import { fetchSelector } from "../redux/storeDataFetcher";
import { allPosts } from "../redux/slice";

export const Posts = () => {
  const allPost = useSelector((state) => fetchSelector(state)).fetchPostData;
  const token = useSelector((state) => fetchSelector(state)).fetchLogin.token;
  const dispatch = useDispatch();

  useEffect(() => {
    console.log("Hello Posts");
    dispatch(allPosts({ token: token }));
  }, [dispatch]);

  return <PostCards data={allPost} />;
};
