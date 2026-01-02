import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import HomePage from "./pages/index/index.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
    </>
  )
);

export default router;
