import React, { lazy, Suspense, useState } from "react";
import { Link, Outlet, useOutlet } from "react-router-dom";

//3rd party libraries
import { useSelector, useDispatch } from "react-redux";

// components
import Asidebar from "../../components/Asidebar";
import Button from "../../components/Button";
import ControlsBoxWrapper from "../../components/ControlsBoxWrapper";
import MainApp from "../../components/MainApp";
import ParamsInput from "../../components/ParamsInput";
import BodyInput from "../../components/BodyInput";
import HeaderInput from "../../components/HeaderInput";
import RequestOptions from "../../components/RequestOptions";
import ResponsePannel from "../../components/ResponsePannel";
import CurrentStatus from "../../components/CurrentStatus";
import Select from "../../components/Select";
import PageWrapper from "../../components/PageWrapper";
import RequestPannel from "../../components/RequestPannel";

// lazy components

// redux slice
import {
  FETCTH_DATA_REQUEST,
  GET_BASIC_REQUEST_DATA,
} from "../../Redux/Slice/AppSlice";

const Headerbar = lazy(() => import("../../Layout/Headerbar/Headerbar"));

const WebhookAppRoot = () => {
  const {
    app: {
      pending,
      data: { basicData },
    },
  } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleChangeFormData = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    dispatch(GET_BASIC_REQUEST_DATA({ [name]: value }));
  };
  const handleSendData = () => {
    console.log("start sending");
    dispatch(FETCTH_DATA_REQUEST());
  };

  return (
    <>
      <Suspense fallback={<div>loading ..</div>}>
        <Headerbar />
      </Suspense>
      <PageWrapper>
        <Asidebar />
        <MainApp>
          <CurrentStatus />
          <section className="bg-zinc-600 px-1 py-2">
            <div className="w-full h-full flex flex-col">
              <ControlsBoxWrapper>
                <Select
                  extraclass={"w-16 md:w-40 h-100 text-start pl-4"}
                  name="method"
                  id="method"
                  value={basicData.method}
                  onChange={handleChangeFormData}
                >
                  <option value="GET">GET</option>
                  <option value="POST">POST</option>
                  <option value="PUT">PUT</option>
                  <option value="HEAD">HEAD</option>
                  <option value="CONNECT">CONNECT</option>
                  <option value="DELETE">DELETE</option>
                  <option value="OPTIONS">OPTIONS</option>
                  <option value="TRACE">TRACE</option>
                  <option value="PATCH">PATCH</option>
                </Select>
                <input
                  className="bg-slate-800 flex-1 focus:outline-none focus:border-2 focus:border-emerald-800 px-4"
                  name="url"
                  id="url"
                  type={"text"}
                  placeholder="http://www.example.com/some/url"
                  value={basicData.url}
                  onChange={handleChangeFormData}
                />
                <Button
                  type={"button"}
                  extraclass={"ml-2 w-28 "}
                  onClick={() => handleSendData()}
                >
                  {pending ? (
                    <>
                      <span className="h-5 w-5 block rounded-full border-2 border-t-slate-800 border-r-slate-800 animate-spin"></span>
                      <small>sending</small>
                    </>
                  ) : (
                    <>
                      send
                      <i className="fi fi-sr-inbox-out border-l-2 pl-2 hover:border-[#D45235]"></i>
                    </>
                  )}
                </Button>
              </ControlsBoxWrapper>
              <RequestPannel>
                <p className="font-normal uppercase">resquest</p>
                <RequestOptions />
                <ParamsInput />
                <HeaderInput />
                <BodyInput />
              </RequestPannel>
              <h5 className="mt-2 mb-1 font-sans uppercase ">response </h5>
              <ResponsePannel>
                <Outlet />
              </ResponsePannel>
            </div>
          </section>
        </MainApp>
      </PageWrapper>
    </>
  );
};

export default React.memo(WebhookAppRoot);
