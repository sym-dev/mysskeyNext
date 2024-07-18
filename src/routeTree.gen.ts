/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from "@tanstack/react-router"

// Import Routes

import { Route as rootRoute } from "./pages/__root"
import { Route as IndexImport } from "./pages/index"
import { Route as LoginLayoutImport } from "./pages/login/_layout"
import { Route as LoginLayoutGetTokenImport } from "./pages/login/_layout/getToken"

// Create Virtual Routes

const LoginImport = createFileRoute("/login")()
const LoginLayoutIndexLazyImport = createFileRoute("/login/_layout/")()

// Create/Update Routes

const LoginRoute = LoginImport.update({
  path: "/login",
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: "/",
  getParentRoute: () => rootRoute,
} as any)

const LoginLayoutRoute = LoginLayoutImport.update({
  id: "/_layout",
  getParentRoute: () => LoginRoute,
} as any)

const LoginLayoutIndexLazyRoute = LoginLayoutIndexLazyImport.update({
  path: "/",
  getParentRoute: () => LoginLayoutRoute,
} as any).lazy(() =>
  import("./pages/login/_layout/index.lazy").then((d) => d.Route),
)

const LoginLayoutGetTokenRoute = LoginLayoutGetTokenImport.update({
  path: "/getToken",
  getParentRoute: () => LoginLayoutRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/": {
      id: "/"
      path: "/"
      fullPath: "/"
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    "/login": {
      id: "/login"
      path: "/login"
      fullPath: "/login"
      preLoaderRoute: typeof LoginImport
      parentRoute: typeof rootRoute
    }
    "/login/_layout": {
      id: "/login/_layout"
      path: "/login"
      fullPath: "/login"
      preLoaderRoute: typeof LoginLayoutImport
      parentRoute: typeof LoginRoute
    }
    "/login/_layout/getToken": {
      id: "/login/_layout/getToken"
      path: "/getToken"
      fullPath: "/login/getToken"
      preLoaderRoute: typeof LoginLayoutGetTokenImport
      parentRoute: typeof LoginLayoutImport
    }
    "/login/_layout/": {
      id: "/login/_layout/"
      path: "/"
      fullPath: "/login/"
      preLoaderRoute: typeof LoginLayoutIndexLazyImport
      parentRoute: typeof LoginLayoutImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  LoginRoute: LoginRoute.addChildren({
    LoginLayoutRoute: LoginLayoutRoute.addChildren({
      LoginLayoutGetTokenRoute,
      LoginLayoutIndexLazyRoute,
    }),
  }),
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/login"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/login": {
      "filePath": "login",
      "children": [
        "/login/_layout"
      ]
    },
    "/login/_layout": {
      "filePath": "login/_layout.tsx",
      "parent": "/login",
      "children": [
        "/login/_layout/getToken",
        "/login/_layout/"
      ]
    },
    "/login/_layout/getToken": {
      "filePath": "login/_layout/getToken.tsx",
      "parent": "/login/_layout"
    },
    "/login/_layout/": {
      "filePath": "login/_layout/index.lazy.tsx",
      "parent": "/login/_layout"
    }
  }
}
ROUTE_MANIFEST_END */
