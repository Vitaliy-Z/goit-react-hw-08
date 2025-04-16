import { configureStore } from "@reduxjs/toolkit";
// It's project was created by Vitalii Zvieriev
import contactsReducer from "./contactsSlice";
import filtersReducer from "./filtersSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer
  }
});
