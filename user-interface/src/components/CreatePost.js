import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CreatePostForm from "../raw/CreatePostForm";
import { newPost } from "../redux/slice";
import { fetchSelector } from "../redux/storeDataFetcher";

const CreatePost = () => {
  const dispatch = useDispatch();

  const isRequestPending = useSelector((state) =>
    fetchSelector(state)
  ).fetchLoadingStatus;
  const credential_token = useSelector((state) => fetchSelector(state))
    .fetchLogin.token;

  const [postData, handlePostData] = useState({
    creator: "",
    title: "",
    description: "",
    file: "",
  });
  const [postImgHandle, handlePostImg] = useState({
    isFileTypeMatched: true,
    isFileUploaded: true,
  });

  const fileChangeHandler = (image) => {
    handlePostImg({ ...postImgHandle, isFileUploaded: false });
    const fileDetailObj = image;
    // Check the extension of the image.
    if (
      checkFileType(fileDetailObj.type) &&
      checkFileSize(fileDetailObj.size)
    ) {
      handlePostData({
        ...postData,
        file: fileDetailObj.base64,
      });
      handlePostImg({ isFileUploaded: true, isFileTypeMatched: true });
    } else {
      handlePostImg({ isFileUploaded: false, isFileTypeMatched: false });
    }
  };

  const handleNewPostData = (e) => {
    if (postImgHandle.isFileUploaded && postImgHandle.isFileTypeMatched) {
      dispatch(
        newPost({
          creator: postData.creator,
          title: postData.title,
          description: postData.description,
          banner: postData.file,
          token: credential_token,
        })
      );
      handlePostData.creator = "";
      handlePostData.description = "";
      handlePostData.file = "";
      handlePostData.title = "";
    }
  };

  return (
    <CreatePostForm
      postData={postData}
      handlePostData={handlePostData}
      fileChangeHandler={fileChangeHandler}
      isFileUploaded={postImgHandle.isFileUploaded}
      isFileTypeMatched={postImgHandle.isFileTypeMatched}
      submitForm={handleNewPostData}
      isRequestPending={isRequestPending}
    />
  );
};

const checkFileSize = (fileSize) => {
  const splitSize = fileSize.split(" ");
  const extractSize = parseInt(splitSize[0]);
  if (extractSize > 70) {
    return false;
  }
  return true;
};

const checkFileType = (fileType) => {
  const fileTypesAllowed = ["png", "webp", "jpg", "jpeg"];
  const type = fileType.split("/")[1];
  if (!fileTypesAllowed.includes(type.toLowerCase())) {
    return false;
  }
  return true;
};

export default CreatePost;
