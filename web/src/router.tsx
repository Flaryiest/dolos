import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import HomePage from "./pages/index/index.tsx";
import PortfolioPage from "./pages/portfolio/portfolio.tsx";
import CareersPage from "./pages/careers/careers.tsx";
import ContactPage from "./pages/contact/contact.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/careers" element={<CareersPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </>
  )
);

export default router;
