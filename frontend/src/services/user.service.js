import axios from "axios";
import map from "lodash/map";

export const userService = {
  signUp,
  login,
  socialLogin,
  logout,
  getUsers,
  getCurrentUser,
  getUserDetail,

  forgetPassword,
  resetPassword,
  updatePassword,
  confirmAccount,
  deleteAccount,
  updateProfile,
  updateAvatarsOrder,
  removeAvatar,
  uploadAvatar,
  resendConfirmMail,
};

function signUp(params) {
  return axios.post("/v1/signup", params);
}

function forgetPassword(params) {
  return axios.post("/v1/forget_password", params);
}

function resetPassword(params) {
  return axios.post("/v1/reset_pasword", params);
}

function confirmAccount(token) {
  return axios.post("/v1/confirm_account", {token: token});
}

function login(params) {
  return axios.post("/v1/signin", params);
}

function socialLogin(params) {
  return axios.post("/v1/social_signin", params);
}

function logout() {
  return axios.delete("/v1/signout");
}

function getUsers(options) {
  return axios.get("/v1/users",
    {params: { ...options }});
}

function getCurrentUser() {
  return axios.get("/v1/current_user");
}

function getUserDetail(userId) {
  return axios.get("/v1/users/" + userId);
}

function updatePassword(params) {
  return axios.post("/v1/users/update_password", params);
}

function deleteAccount(params) {
  return axios.delete("/v1/users/delete_account", {params: { ...params }});
}

function updateProfile(params) {
  return axios.put("/v1/users/update_profile", params);
}

function updateAvatarsOrder(avatars) {
  return axios.put("/v1/users/update_avatars_order", {
    avatar_ids: map(avatars, (avatar) => (avatar.id))
  });
}

function removeAvatar(avatarId) {
  return axios.delete("/v1/users/delete_avatar", {params: { avatar_id: avatarId }});
}

function uploadAvatar(file, callback) {
  const config = {
    headers: { 'Content-Type': 'multipart/form-data' },
    onUploadProgress: callback,
  };
  let data = new FormData();
  data.append('avatar', file);

  return axios.post("/v1/users/add_avatar", data, config);
}

function resendConfirmMail() {
  return axios.post("/v1/users/resend_confirm_mail");
}
