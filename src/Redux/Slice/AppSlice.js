import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const FETCTH_DATA_REQUEST = createAsyncThunk(
  "app/send-request",
  async (_, thunkApi) => {
    const { getState, rejectWithValue } = thunkApi;
    const {
      app: { data },
    } = getState();
    try {
      const request = await axios({
        url: data.basicData.url,
        method: data.basicData.method,
      });
      const result = await request;
      return result;
    } catch (error) {
      throw rejectWithValue(error.message);
    }
  }
);

const initialState = {
  pending: false,
  success: null,
  error: {
    isError: null,
    message: "",
  },
  bodyRequestType: "none-use",
  inputMethod: false, // bulk input key&& value
  data: {
    basicData: {
      url: "",
      method: "GET",
    },
    paramsQuerys: "",
    bodyData: {
      key: "",
      value: "",
    },
    headers: {},
  },
  //
  responseBody: null,
  responseHeaders: null,
  responseCookies: null,
};

export const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    GET_REQUEST_BODY: (state, actions) => {
      state.data.bodyData = { ...state.data.bodyData, ...actions.payload };
    },
    GET_REQUEST_PARAMS: (state, actions) => {
      Boolean(state.data.paramsQuerys?.length >= 2) &&
        (state.data.basicData.url = state.data.basicData.url.concat(
          state.data.paramsQuerys
        ));
      state.data.paramsQuerys = actions.payload;
    },
    GET_REQUEST_HEADERS: (state, actions) => {
      state.data.headers = { ...state.data.headers, ...actions.payload };
    },
    CHANGE_BODY_REQUEST_TYPE: (state, actions) => {
      state.bodyRequestType = actions.payload.bodyRequestType;
    },

    CHANGE_REQUEST_INPUTM_METHOD: (state, actions) => {
      state.inputMethod = actions.payload.inputMethod;
    },
    GET_BASIC_REQUEST_DATA: (state, actions) => {
      state.data.basicData = { ...actions.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(FETCTH_DATA_REQUEST.pending, (state, actions) => {
      state.pending = true;
      state.success = null;
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
      state.success = true;
    });

    builder.addCase(FETCTH_DATA_REQUEST.rejected, (state, actions) => {
      state.pending = false;
      state.success = null;
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
