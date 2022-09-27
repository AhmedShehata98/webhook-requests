import React, { lazy, Suspense } from "react";

//3rd party libraries
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RoutesLinks } from "../utilities/RoutesList";
import { Provider } from "react-redux";

// utilities
import { store } from "../Redux/store";
import ResponseOptionsTabs from "../components/ResponseOptionsTabs";
import ResponsePannel from "../components/ResponsePannel";
import ResponseRoot from "../components/ResponseRoot";

// components

// lazy components
const Headerbar = lazy(import("../Layout/Headerbar/Headerbar"));
const Root = lazy(() => import("../pages/Root/Root"));
const WebhookAppRoot = lazy(() => import("../pages/WebhookApp/WebhookAppRoot"));
const BodyResponse = lazy(() => import("../components/BodyResponse"));
const CookiesResponse = lazy(() => import("../components/CookiesResponse"));
const HeadersResponse = lazy(() => import("../components/HeadersResponse"));

export const Router = createBrowserRouter([
  {
    path: RoutesLinks.home,
    element: <Root />,
  },
  {
    path: `/${RoutesLinks.webHookApp}`,
    element: (
      <Suspense fallback={<h4>loading ..</h4>}>
        <Provider store={store}>
          <WebhookAppRoot />
        </Provider>
      </Suspense>
    ),
    children: [
      {
        path: RoutesLinks.response,
        element: (
          <Suspense fallback={<div>loading ..</div>}>
            <ResponseOptionsTabs />
            <ResponseRoot />
          </Suspense>
        ),
        children: [
          {
            path: RoutesLinks.bodyResponse,
            element: (
              <Suspense fallback={<div>loading ..</div>}>
                <BodyResponse />
              </Suspense>
            ),
          },
          {
            path: RoutesLinks.cookiesResponse,
            element: (
              <Suspense fallback={<div>loading ..</div>}>
                <CookiesResponse />
              </Suspense>
            ),
          },
          {
            path: RoutesLinks.headersResponse,
            element: (
              <Suspense fallback={<div>loading ..</div>}>
                <HeadersResponse />
              </Suspense>
            ),
          },
        ],
      },
    ],
  },
]);

// function Router() {
//   return (
//     <RoutesWrapper>
//       <Route
//         path={`/${RoutesLinks.home}`}
//         element={
//           <Suspense fallback={<div> loading ...</div>}>
//             <Home />
//           </Suspense>
//         }
//       />
//       <Route path="/form" element={<Form />} />

//       <Route
//         path={`/${RoutesLinks.app}`}
//         element={
//           <Suspense fallback={<div> loading ...</div>}>
//             <Provider store={store}>
//               <WebhookApp />
//             </Provider>
//           </Suspense>
//         }
//       >
//         <Route path={RoutesLinks.response}>
//           <Route
//             index
//             element={
//               <Suspense fallback={<div> loading ...</div>}>
//                 <BodyResponse />
//               </Suspense>
//             }
//           />
//           <Route
//             path={RoutesLinks.bodyResponse}
//             element={
//               <Suspense fallback={<div> loading ...</div>}>
//                 <BodyResponse />
//               </Suspense>
//             }
//           />
//           <Route
//             path={RoutesLinks.cookiesResponse}
//             element={
//               <Suspense fallback={<div> loading ...</div>}>
//                 <CookiesResponse />
//               </Suspense>
//             }
//           />
//           <Route
//             path={RoutesLinks.headersResponse}
//             element={
//               <Suspense fallback={<div> loading ...</div>}>
//                 <HeadersResponse />
//               </Suspense>
//             }
//           />
//         </Route>
//       </Route>
//     </RoutesWrapper>
//   );
// }

// export default Router;
