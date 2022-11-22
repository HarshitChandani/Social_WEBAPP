import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:7000/";

export const newPost = createAsyncThunk(
  "SocialMedia/newPost",
  async (payload) => {
    const data = await axios({
      method: "POST",
      url: `${url}api/new`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${payload.token}`,
      },
      data: {
        creator: payload.creator,
        title: payload.title,
        description: payload.description,
        banner: payload.banner,
      },
      withCredentials: true,
    });
    if (data.status === 200) {
      const response = data.data.post;
      return response;
    }
  }
);
export const login = createAsyncThunk(
  "SocialMedia/login",
  async ({ username, password }) => {
    const data = await axios({
      method: "POST",
      url: `${url}user/login`,
      data: {
        username: username,
        password: password,
      },
      withCredentials: true,
    });
    if (data.status === 200) {
      // request completed.
      const workingData = data.data;
      return workingData;
    }
  }
);
export const register = createAsyncThunk(
  "SocialMedia/register",
  async (payload) => {
    const data = await axios({
      method: "POST",
      url: `${url}user/register`,
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        f_name: payload.f_name,
        l_name: payload.l_name,
        username: payload.username,
        pwd: payload.pwd,
      },
      withCredentials: true,
    });

    if (data.status === 200) {
      return data.data;
    }
  }
);
export const allPosts = createAsyncThunk(
  "SocialMedia/allPost",
  async (payload) => {
    const data = await axios({
      method: "GET",
      url: `${url}api/all`,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${payload.token}`,
      },
      withCredentials: true,
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
    login: {
      isLoggedIn: null,
      msg: "",
      token: null,
    },
    register: {
      msg: "",
      isUserCreated: null,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // newPost Reducer
      .addCase(newPost.pending, (state, action) => {
        state.loading = true;
        console.log("Request is processing.");
      })
      .addCase(newPost.fulfilled, (state, action) => {
        console.log("Request fullfilled.");
        state.loading = false;
        state.data.push(action.payload);
      })
      // Login Reducer
      .addCase(login.pending, (state, action) => {})
      .addCase(login.fulfilled, (state, action) => {
        state.login.isLoggedIn = action.payload.isLoggedIn;
        state.login.msg = action.payload.msg;
        localStorage.setItem("token", action.payload.token);
        state.login.token = action.payload.token;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.register.msg = action.payload.msg;
        state.register.isUserCreated = action.payload.created;
      })
      .addCase(allPosts.fulfilled, (state, action) => {
        state.data.push(...action.payload);
      });
  },
});

export default SocialMediaSlice.reducer;
