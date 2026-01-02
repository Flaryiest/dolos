import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import HomePage from "./pages/index/index.tsx";
import DemoPage from "./pages/demo/demo.tsx";
import PricingPage from "./pages/pricing/pricing.tsx";
import LoginPage from "./pages/login/login.tsx";
import SignUpPage from "./pages/signup/signup.tsx";
import ResearchAssistantPage from "./pages/features/researchAssistant/researchAssistant.tsx";
import SlideshowCreatorPage from "./pages/features/slideshowCreator/slideshowCreator.tsx";
import WaitlistPage from "./pages/waitlist/waitlist.tsx";
import DashboardPage from "./pages/dashboard/dashboard.tsx";
import VerifyEmailPage from "./pages/verify/verify.tsx";
import DashboardLayout from "./pages/dashboard/layout/dashboardLayout.tsx";
import TextEditor from "./pages/dashboard/textEditor/textEditor.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/demo" element={<DemoPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardPage />} />
        <Route path="docs/:docId" element={<TextEditor />} />
      </Route>
      <Route path="/verify-email" element={<VerifyEmailPage />} />
      <Route path="/features">
        <Route path="research" element={<ResearchAssistantPage />} />
        <Route path="slideshow" element={<SlideshowCreatorPage />} />
      </Route>
      <Route path="/waitlist" element={<WaitlistPage />} />
    </>
  )
);

export default router;
