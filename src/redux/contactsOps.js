import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// It's project was created by Vitalii Zvieriev
axios.defaults.baseURL =
  "https://67ebfffaaa794fb3222c73cc.mockapi.io/vitalii-zvieriev";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchAll",
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get("/contacts");
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const addContact = createAsyncThunk(
  "contacts/addContact",
  async (newContact, thunkAPI) => {
    try {
      const { data } = await axios.post("/contacts", newContact);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, thunkAPI) => {
    try {
      const { data } = await axios.delete(`/contacts/${contactId}`);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);
