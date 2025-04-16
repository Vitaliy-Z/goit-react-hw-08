import { createSlice } from "@reduxjs/toolkit";
import {
  fetchLogInUser,
  fetchLogOutUser,
  fetchRegisterUser
} from "./operations";
import { handleError, handlePending } from "../helpers/helpers";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: {
      name: null,
      email: null
    },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    loading: false,
    error: null
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRegisterUser.pending, handlePending)
      .addCase(fetchRegisterUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.loading = false;
      })
      .addCase(fetchRegisterUser.rejected, handleError)
      .addCase(fetchLogInUser.pending, handlePending)
      .addCase(fetchLogInUser.fulfilled, (state, { payload }) => {
        state.user = payload.user;
        state.token = payload.token;
        state.isLoggedIn = true;
        state.loading = false;
      })
      .addCase(fetchLogInUser.rejected, handleError)
      .addCase(fetchLogOutUser.pending, handlePending)
      .addCase(fetchLogOutUser.fulfilled, (state) => {
        state.user = {
          name: null,
          email: null
        };
        state.token = null;
        state.isLoggedIn = false;
        state.loading = false;
      })
      .addCase(fetchLogOutUser.rejected, handleError);
  }
});

export default authSlice.reducer;
