import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const FrameOne = React.lazy(() => import("pages/FrameOne"));
const Page11 = React.lazy(() => import("pages/Page11"));
const Page10 = React.lazy(() => import("pages/Page10"));
const Page9 = React.lazy(() => import("pages/Page9"));
const FairytaleSetting = React.lazy(() => import("pages/FairytaleSetting"));
const Page8 = React.lazy(() => import("pages/Page8"));
const Page7 = React.lazy(() => import("pages/Page7"));
const TemporaryStorage = React.lazy(() => import("pages/TemporaryStorage"));
const Page6 = React.lazy(() => import("pages/Page6"));
const Page5 = React.lazy(() => import("pages/Page5"));
const Page4 = React.lazy(() => import("pages/Page4"));
const Page3 = React.lazy(() => import("pages/Page3"));
const Page2 = React.lazy(() => import("pages/Page2"));
const Sanse = React.lazy(() => import("pages/Sanse"));
const Page1 = React.lazy(() => import("pages/Page1"));
const ProfileMod = React.lazy(() => import("pages/ProfileMod"));
const Like = React.lazy(() => import("pages/Like"));
const Profile = React.lazy(() => import("pages/Profile"));
const Page = React.lazy(() => import("pages/Page"));
const Follow = React.lazy(() => import("pages/Follow"));
const FrameTwo = React.lazy(() => import("pages/FrameTwo"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<FrameTwo />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/follow" element={<Follow />} />
          <Route path="/page" element={<Page />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/like" element={<Like />} />
          <Route path="/profilemod" element={<ProfileMod />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/sanse" element={<Sanse />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/page5" element={<Page5 />} />
          <Route path="/page6" element={<Page6 />} />
          <Route path="/temporarystorage" element={<TemporaryStorage />} />
          <Route path="/page7" element={<Page7 />} />
          <Route path="/page8" element={<Page8 />} />
          <Route path="/fairytalesetting" element={<FairytaleSetting />} />
          <Route path="/page9" element={<Page9 />} />
          <Route path="/page10" element={<Page10 />} />
          <Route path="/page11" element={<Page11 />} />
          <Route path="/frameone" element={<FrameOne />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
