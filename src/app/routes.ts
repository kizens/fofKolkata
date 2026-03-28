import { createBrowserRouter } from "react-router";
import { Presentation } from "./components/Presentation";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Presentation,
  },
], {
  basename: import.meta.env.PROD ? "/AI-Outsourced" : "/"
});