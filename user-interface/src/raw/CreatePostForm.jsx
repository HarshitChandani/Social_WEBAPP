import React from "react";
import { Form, FloatingLabel, Button } from "react-bootstrap";
import { FadeLoader } from "react-spinners";
import FileBase64 from "react-file-base64";
import "../style/App.css";

const CreatePostForm = ({
  postData,
  handlePostData,
  fileChangeHandler,
  isFileTypeMatched,
  isFileUploaded,
  submitForm,
  isRequestPending,
}) => {
  return (
    <div className="newPost m-2">
      <h6>New Post</h6>
      <div
        className="rounded border p-2 bg_color"
        style={{
          fontSize: ".8rem",
        }}
      >
        <form action="post">
          <Form.Group className="mb-2" controlId="postCreator">
            <Form.Label className="text_color">Creator</Form.Label>
            <Form.Control
              type="text"
              placeholder="Creator Name"
              name="creator"
              size="sm"
              value={postData.creator}
              onChange={(e) =>
                handlePostData({ ...postData, creator: e.target.value })
              }
              style={{ fontSize: ".7rem" }}
              readOnly={isRequestPending ? true : false}
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="postTitle">
            <Form.Label className="text_color">Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Post Title"
              name="title"
              size="sm"
              value={postData.title}
              onChange={(e) =>
                handlePostData({ ...postData, title: e.target.value })
              }
              style={{ fontSize: ".7rem" }}
              readOnly={isRequestPending ? true : false}
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="postDescription">
            <Form.Label className="text_color">Description</Form.Label>
            <FloatingLabel controlId="floatingTextarea" className="mb-1">
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                value={postData.description}
                onChange={(e) =>
                  handlePostData({ ...postData, description: e.target.value })
                }
                style={{ fontSize: ".7rem" }}
                readOnly={isRequestPending ? true : false}
              />
            </FloatingLabel>
          </Form.Group>
          <Form.Group className="mb-2" controlId="postTitle">
            <Form.Label className="d-flex align-items-center text_color">
              Banner
              <FadeLoader
                height={15}
                width={4}
                cssOverride={{
                  height: "50px",
                  marginLeft: "15px",
                }}
                loading={isFileUploaded ? false : true}
                style={{ fontSize: ".7rem" }}
              />
            </Form.Label>
            <FileBase64
              multiple={false}
              onDone={fileChangeHandler}
              style={{ fontSize: "xx-small" }}
            />
          </Form.Group>
        </form>
        <Button
          className="mt-1 border"
          size="sm"
          onClick={submitForm}
          disabled={isRequestPending ? true : false}
          style={{
            backgroundColor: "rgb(11 61 58)",
            color: "rgb(241 225 193)",
          }}
        >
          Create Post
        </Button>
        <div
          className="form-error text-danger mt-2 text-center"
          style={{ fontSize: ".5rem" }}
        >
          {!isFileTypeMatched
            ? "!! File not allowed ( Size must be less than 70 kb and only JPG/PNG/WEBP files are allowed)"
            : " "}
        </div>
      </div>
      <div className="text-center">{isRequestPending ? "Loading..." : ""}</div>
    </div>
  );
};

export default CreatePostForm;
