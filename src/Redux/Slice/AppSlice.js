import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  pending: false,
  error: {
    isError: null,
    message: "",
  },
  requestMenu: "params",
  bodyRequestType: "none-use",
  inputMethod: false, // bulk input key&& value
  data: {
    basicData: {
      url: "",
      method: "GET",
    },
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
  //
  responseBody: null,
  responseHeaders: null,
  responseCookies: null,
};

export const FETCTH_DATA_REQUEST = createAsyncThunk(
  "app/request-data",
  async (_, thunkApi) => {
    const { getState, rejectWithValue } = thunkApi;
    const state = getState();

    await axios({
      url: state.data.basicData.url,
      method: state.data.basicData.method,
    })
      .then((res) => res)
      .catch((err) => rejectWithValue(err));
  }
);
export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    GET_REQUEST_BODY: (state, actions) => {
      state.data.bodyData = { ...state.data.bodyData, ...actions.payload };
    },
    GET_REQUEST_PARAMS: (state, actions) => {
      state.data.params = { ...state.data.params, ...actions.payload };
    },
    GET_REQUEST_HEADERS: (state, actions) => {
      state.data.headers = { ...state.data.headers, ...actions.payload };
    },
    CHANGE_REQUEST_MENU: (state, actions) => {
      state.requestMenu = actions.payload.requestMenu;
    },
    CHANGE_BODY_REQUEST_TYPE: (state, actions) => {
      state.bodyRequestType = actions.payload.bodyRequestType;
    },

    CHANGE_REQUEST_INPUTM_METHOD: (state, actions) => {
      state.inputMethod = actions.payload.inputMethod;
    },
    GET_BASIC_REQUEST_DATA: (state, actions) => {
      state.data.basicData = {
        ...state.data.basicData,
        ...actions.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(FETCTH_DATA_REQUEST.pending, (state, actions) => {
      state.pending = true;
      state.error = {
        isError: null,
        message: "",
      };
      state.responseBody = null;
      state.responseHeaders = null;
      state.responseCookies = null;
    });
    builder.addCase(FETCTH_DATA_REQUEST.fulfilled, (state, actions) => {
      state.pending = false;
      state.error = {
        isError: null,
        message: "",
      };
      state.responseBody = actions.payload.data;
      state.responseHeaders = actions.payload.headers;
      state.responseCookies = actions.payload.config;
    });
    builder.addCase(FETCTH_DATA_REQUEST.rejected, (state, actions) => {
      state.pending = false;
      state.error = {
        isError: true,
        message: actions.payload,
      };
    });
  },
});

export const {
  GET_REQUEST_BODY,
  GET_REQUEST_HEADERS,
  GET_REQUEST_PARAMS,
  CHANGE_REQUEST_MENU,
  CHANGE_BODY_REQUEST_TYPE,
  CHANGE_REQUEST_INPUTM_METHOD,
  GET_BASIC_REQUEST_DATA,
} = appSlice.actions;
