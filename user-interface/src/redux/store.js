import { configureStore } from "@reduxjs/toolkit";
import SocialMediaReducer from "./slice";
export default configureStore({
  reducer: {
    social_media: SocialMediaReducer,
  },
});
