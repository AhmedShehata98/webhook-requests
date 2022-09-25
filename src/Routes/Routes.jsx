import React, { lazy, Suspense } from "react";
import { Route, Routes as RoutesWrapper } from "react-router-dom";
import { RoutesLinks } from "../utilities/RoutesList";
const Home = lazy(() => import("../pages/Home/Home"));
const WebhookApp = lazy(() => import("../pages/WebhookApp/WebhookApp"));
const BodyResponse = lazy(() => import("../components/BodyResponse"));
const CookiesResponse = lazy(() => import("../components/CookiesResponse"));
const HeadersResponse = lazy(() => import("../components/HeadersResponse"));

function Routes() {
  return (
    <RoutesWrapper>
      <Route
        path={`/${RoutesLinks.home}`}
        element={
          <Suspense fallback={<div> loading ...</div>}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path={`/${RoutesLinks.app}`}
        element={
          <Suspense fallback={<div> loading ...</div>}>
            <WebhookApp />
          </Suspense>
        }
      >
        <Route path={RoutesLinks.response}>
          <Route
            index
            element={
              <Suspense fallback={<div> loading ...</div>}>
                <BodyResponse />
              </Suspense>
            }
          />
          <Route
            path={RoutesLinks.bodyResponse}
            element={
              <Suspense fallback={<div> loading ...</div>}>
                <BodyResponse />
              </Suspense>
            }
          />
          <Route
            path={RoutesLinks.cookiesResponse}
            element={
              <Suspense fallback={<div> loading ...</div>}>
                <CookiesResponse />
              </Suspense>
            }
          />
          <Route
            path={RoutesLinks.headersResponse}
            element={
              <Suspense fallback={<div> loading ...</div>}>
                <HeadersResponse />
              </Suspense>
            }
          />
        </Route>
      </Route>
    </RoutesWrapper>
  );
}

export default Routes;
