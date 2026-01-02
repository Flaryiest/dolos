import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import IndexPage from '@/pages/home/index';
import PortfolioPage from '@/pages/portfolio/portfolio';
import CareersPage from '@/pages/careers/careers';
import ContactPage from '@/pages/contact/contact';
import Layout from '@/components/layout/layout';

const router = createBrowserRouter(createRoutesFromElements(
  <Route element={<Layout />}>
    <Route path="/" element={<IndexPage />} />
    <Route path="/portfolio" element={<PortfolioPage />} />
    <Route path="/careers" element={<CareersPage />} />
    <Route path="/contact" element={<ContactPage />} />
  </Route>
));

export default router;
