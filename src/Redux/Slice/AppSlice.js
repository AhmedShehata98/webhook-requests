import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  error: false,
  data: {
    url: "",
    method: "GET",
    params: {
      key: "",
      value: "",
    },
    bodyData: {
      key: "",
      value: "",
    },
    headers: {
      key: "",
      value: "",
    },
  },
};
export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    GET_REQUEST_BODY: (state, actions) => {
      state.data.bodyData.key = actions.payload.key;
      state.data.bodyData.value = actions.payload.value;
    },
    GET_REQUEST_PARAMS: (state, actions) => {
      state.data.params.key = actions.payload.key;
      state.data.params.value = actions.payload.value;
    },
    GET_REQUEST_HEADERS: (state, actions) => {
      state.data.headers.key = actions.payload.key;
      state.data.headers.value = actions.payload.value;
    },
  },
});

export const { GET_REQUEST_BODY, GET_REQUEST_HEADERS, GET_REQUEST_PARAMS } =
  appSlice.actions;
