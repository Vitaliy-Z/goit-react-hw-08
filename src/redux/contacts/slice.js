import { createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./operations";
import { handleError, handlePending } from "../helpers/helpers";
import { fetchLogOutUser } from "../auth/operations";

// It's project was created by Vitalii Zvieriev
const contactSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: null
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.items = action.payload;
        state.loading = false;
      })
      .addCase(fetchContacts.rejected, handleError)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
        state.loading = false;
      })
      .addCase(addContact.rejected, handleError)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter((el) => el.id !== action.payload.id);
        state.loading = false;
      })
      .addCase(deleteContact.rejected, handleError)
      .addCase(fetchLogOutUser.fulfilled, (state) => {
        state.items = [];
      });
  }
});

// It's project was created by Vitalii Zvieriev
export default contactSlice.reducer;
