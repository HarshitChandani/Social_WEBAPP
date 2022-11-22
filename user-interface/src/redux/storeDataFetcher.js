const fetchSelector = ({ social_media }) => {
  return {
    fetchPostData: social_media.data,
    fetchLoadingStatus: social_media.loading,
    fetchLogin: {
      isLoggedIn: social_media.login.isLoggedIn,
      msg: social_media.login.msg,
      token: social_media.login.token,
    },
    fetchRegister: {
      msg: social_media.register.msg,
      isUserCreated: social_media.register.isUserCreated,
    },
  };
};

export { fetchSelector };
