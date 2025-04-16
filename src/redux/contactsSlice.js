import { createSelector, createSlice } from "@reduxjs/toolkit";
import { addContact, deleteContact, fetchContacts } from "./contactsOps";
import { selectNameFilter } from "./filtersSlice";
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
      .addCase(fetchContacts.pending, (state) => {
        state.error = null;
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addContact.pending, (state) => {
        state.error = null;
      })
      .addCase(addContact.fulfilled, (state, action) => {
        state.items.push(action.payload);
      })
      .addCase(addContact.rejected, (state, action) => {
        state.error = action.payload;
      })
      .addCase(deleteContact.pending, (state) => {
        state.error = null;
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.items = state.items.filter((el) => el.id !== action.payload.id);
      })
      .addCase(deleteContact.rejected, (state, action) => {
        state.error = action.payload;
      });
  }
});

export const selectContact = (state) => state.contacts.items;
export const selectLoading = (state) => state.contacts.loading;
export const selectErorr = (state) => state.contacts.erorr;
export const selectFilteredContacts = createSelector(
  [selectContact, selectNameFilter],
  (contactsItems, filterName) =>
    contactsItems.filter((el) =>
      el.name.toLowerCase().includes(filterName.toLowerCase())
    )
);
// It's project was created by Vitalii Zvieriev
export default contactSlice.reducer;
