import React, { lazy, Suspense, useCallback, useRef, useState } from "react";

//3rd party libraries
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Outlet } from "react-router-dom";

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
import { RoutesLinks } from "../../utilities/RoutesList";
import { useEffect } from "react";

const Headerbar = lazy(() => import("../../Layout/Headerbar/Headerbar"));

const WebhookAppRoot = () => {
  const {
    app: { pending, success },
  } = useSelector((state) => state);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const ResponsePannelRef = useRef(null);
  const isFullScreen = useRef(false);
  const ParamsInputRef = useRef(null);
  const HeaderInputRef = useRef(null);
  const BodyInputRef = useRef(null);
  const urlRef = useRef(null);
  const selectMethodRef = useRef(null);
  const inputDataRef = useRef({
    method: "GET",
    url: "",
  });

  const handleChange = ({ target }) => {
    let name = target.name;
    let value = target.value;

    if (Boolean(name === "method")) {
      inputDataRef.current = { ...inputDataRef.current, method: value };
    }
    if (Boolean(name === "url")) {
      inputDataRef.current = { ...inputDataRef.current, url: value };
    }
  };
  const handleSendData = (e) => {
    dispatch(FETCTH_DATA_REQUEST());
  };

  const handleBlur = ({ target }) => {
    dispatch(GET_BASIC_REQUEST_DATA(inputDataRef.current));
  };

  const handleGetTargetMenu = useCallback((e) => {
    let targetTabID = e.target.dataset.id;
    let sectionID = [
      ParamsInputRef.current,
      HeaderInputRef.current,
      BodyInputRef.current,
    ];

    sectionID.forEach((section) => {
      if (section.id === targetTabID) {
        section.classList.remove("hidden");
        section.classList.add("block");
      } else {
        section.classList.remove("block");
        section.classList.add("hidden");
      }
    });
  }, []);

  const handleOpenInFullScreen = ({ target }) => {
    isFullScreen.current = !isFullScreen.current;
    console.log("first");
    let fullScreenClasses = [
      "fixed",
      "w-5/6",
      "top-2/4",
      "left-2/4",
      "-translate-x-2/4",
      "-translate-y-2/4",
      "h-3/4",
    ];
    const childrenClasses = ["p-2"];

    if (Boolean(isFullScreen.current)) {
      ResponsePannelRef.current.classList.remove(...["w-full", "min-w-full"]);
      ResponsePannelRef.current.classList.add(...fullScreenClasses);
      ResponsePannelRef.current.firstChild.classList.add(...childrenClasses);
    } else {
      ResponsePannelRef.current.classList.add(...["w-full", "min-w-full"]);
      ResponsePannelRef.current.classList.remove(...fullScreenClasses);
      ResponsePannelRef.current.firstChild.classList.remove(...childrenClasses);
    }
    changeFullScreenBtn(target);
  };
  const changeFullScreenBtn = (target) => {
    if (Boolean(isFullScreen.current)) {
      target.firstChild.className =
        "fi fi-sr-compress leading-3 text-sm pointer-events-none select-none";
    } else {
      target.firstChild.className =
        "fi fi-sr-expand leading-3 text-sm pointer-events-none select-none";
    }
  };

  useEffect(() => {
    if (pending === false) {
      Boolean(success)
        ? navigate(`${RoutesLinks.response}/${RoutesLinks.bodyResponse}`)
        : null;
    }
  }, [pending]);

  return (
    <>
      <Suspense fallback={<div>loading ..</div>}>
        <Headerbar />
      </Suspense>
      <PageWrapper>
        <Asidebar />
        <MainApp>
          <CurrentStatus url={urlRef.current?.value} />
          <section className="bg-slate-800 shadow-inner rounded-lg px-2 py-2">
            <div className="w-full h-full flex flex-col">
              <ControlsBoxWrapper>
                <Select
                  ref={selectMethodRef}
                  extraclass={"w-16 md:w-40 h-100 text-start pl-4"}
                  name="method"
                  id="method"
                  onBlur={handleBlur}
                  onChange={handleChange}
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
                  ref={urlRef}
                  className="bg-slate-700 flex-1 border border-l-0  border-slate-600 focus:outline-none focus:bg-slate-700 focus:border-sky-800 px-4"
                  name="url"
                  id="url"
                  type={"url"}
                  placeholder="http://www.example.com/some/url"
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Button
                  type={"button"}
                  extraclass={"ml-2 w-28 rounded-xl"}
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
                      <i className="fi fi-sr-inbox-out border-l-2 border-slate-600 pl-2 "></i>
                    </>
                  )}
                </Button>
              </ControlsBoxWrapper>
              <RequestPannel>
                <p className="font-normal uppercase">resquest</p>
                <RequestOptions handleGetTargetMenu={handleGetTargetMenu} />
                <ParamsInput ref={ParamsInputRef} />
                <HeaderInput ref={HeaderInputRef} />
                <BodyInput ref={BodyInputRef} />
              </RequestPannel>
              <ResponsePannel ref={ResponsePannelRef}>
                <span className=" font-sans uppercase bg-gray-800 w-full flex justify-between items-center">
                  response
                  <div className="h-8 flex items-center bg-gray-800">
                    <button
                      type="button"
                      className="h-8 flex items-center justify-center aspect-square cursor-pointer bg-slate-600 text-cyan-300  rounded-full hover:bg-slate-500"
                      onClick={handleOpenInFullScreen}
                    >
                      <i className="fi fi-sr-expand leading-3 text-sm pointer-events-none select-none"></i>
                    </button>
                  </div>
                </span>

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
