import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const newPost = createAsyncThunk(
  "SocialMedia/newPost",
  async (payload) => {
    const data = await axios({
      method: "POST",
      url: `http://localhost:7000/api/new`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        creator: payload.creator,
        title: payload.title,
        description: payload.description,
        banner: payload.banner,
      },
    });
    if (data.status === 200) {
      const response = data.data.post;
      return response;
    }
  }
);

const SocialMediaSlice = createSlice({
  name: "SocialMedia",
  initialState: {
    loading: null,
    data: [],
  },
  reducers: {},
  extraReducers: {
    [newPost.pending]: (state, action) => {
      state.loading = true;
      console.log("Request is processing.");
    },
    [newPost.fulfilled]: (state, action) => {
      console.log("Request fullfilled.");
      state.loading = false;
      state.data.push(action.payload);
    },
  },
});

export default SocialMediaSlice.reducer;
