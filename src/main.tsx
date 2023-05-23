import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { LoginProvider } from "./apps/login";
import { router } from "./utils/router";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <LoginProvider>
      <ChakraProvider resetCSS>
        <RouterProvider router={router} />
      </ChakraProvider>
    </LoginProvider>
  </React.StrictMode>,
);
