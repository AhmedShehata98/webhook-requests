import React, { useState } from "react";
import { Link, useOutlet } from "react-router-dom";

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

const WebhookApp = () => {
  const {
    app: {
      data: { method, url },
    },
  } = useSelector((state) => state);
  const [requestMenu, setRequestMenu] = useState("params");

  const handleChangeFormData = () => {};
  const handleSendData = () => {};
  const handleRequestMenu = () => {
    switch (requestMenu) {
      case "params":
        return <ParamsInput $requestMenu={requestMenu} />;
        break;
      case "headers":
        return <HeaderInput $requestMenu={requestMenu} />;
        break;
      case "body":
        return <BodyInput $requestMenu={requestMenu} />;
        break;
      default:
        return <ParamsInput $requestMenu={requestMenu} />;
        break;
    }
  };

  return (
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
                value={method}
                onChange={handleChangeFormData}
              >
                <option value="GET">GET</option>
                <option value="POST">POST</option>
                <option value="PUT">PUT</option>
                <option value="HEAD">HEAD</option>
                <option value="CONNECT">CONNECT</option>
                <option value="OPTIONS">OPTIONS</option>
                <option value="TRACE">TRACE</option>
                <option value="PATCH">TRACE</option>
              </Select>
              <input
                className="bg-slate-800 flex-1 focus:outline-none focus:border-2 focus:border-emerald-800 px-4"
                name="url"
                id="url"
                type={"text"}
                placeholder="http://www.example.com/some/url"
                value={url}
                onChange={handleChangeFormData}
              />
              <Button
                type={"button"}
                extraclass={"ml-2 w-28 "}
                onClick={() => handleSendData()}
              >
                send
                <i className="fi fi-sr-inbox-out border-l-2 pl-2 hover:border-[#D45235]"></i>
                {/* <span className="h-5 w-5 block rounded-full border-2 border-t-slate-800 border-r-slate-800 animate-spin"></span>
                  <small>sending</small> */}
              </Button>
            </ControlsBoxWrapper>
            <RequestPannel>
              <p className="font-normal uppercase">resquest</p>
              <RequestOptions setRequestMenu={setRequestMenu} />
              {handleRequestMenu()}
            </RequestPannel>
            <ResponsePannel />
          </div>
        </section>
      </MainApp>
    </PageWrapper>
  );
};

export default WebhookApp;
