import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const Page31 = React.lazy(() => import("pages/Page31"));
const Page22 = React.lazy(() => import("pages/Page22"));
const Page21 = React.lazy(() => import("pages/Page21"));
const Page20 = React.lazy(() => import("pages/Page20"));
const Page19 = React.lazy(() => import("pages/Page19"));
const Page18 = React.lazy(() => import("pages/Page18"));
const Page17 = React.lazy(() => import("pages/Page17"));
const Page16 = React.lazy(() => import("pages/Page16"));
const Page24 = React.lazy(() => import("pages/Page24"));
const Page15 = React.lazy(() => import("pages/Page15"));
const Page14 = React.lazy(() => import("pages/Page14"));
const Page13 = React.lazy(() => import("pages/Page13"));
const Page12 = React.lazy(() => import("pages/Page12"));
const Page11 = React.lazy(() => import("pages/Page11"));
const Page10 = React.lazy(() => import("pages/Page10"));
const Page9 = React.lazy(() => import("pages/Page9"));
const Page8 = React.lazy(() => import("pages/Page8"));
const Page7 = React.lazy(() => import("pages/Page7"));
const Page6 = React.lazy(() => import("pages/Page6"));
const Page5 = React.lazy(() => import("pages/Page5"));
const Page25 = React.lazy(() => import("pages/Page25"));
const Page26 = React.lazy(() => import("pages/Page26"));
const Page27 = React.lazy(() => import("pages/Page27"));
const Page4 = React.lazy(() => import("pages/Page4"));
const Page3 = React.lazy(() => import("pages/Page3"));
const Page28 = React.lazy(() => import("pages/Page28"));
const Page2 = React.lazy(() => import("pages/Page2"));
const Page1 = React.lazy(() => import("pages/Page1"));
const Page30 = React.lazy(() => import("pages/Page30"));
const Page29 = React.lazy(() => import("pages/Page29"));
const Page = React.lazy(() => import("pages/Page"));
const FrameTwo = React.lazy(() => import("pages/FrameTwo"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<FrameTwo />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/page" element={<Page />} />
          <Route path="/page29" element={<Page29 />} />
          <Route path="/page30" element={<Page30 />} />
          <Route path="/page1" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/page28" element={<Page28 />} />
          <Route path="/page3" element={<Page3 />} />
          <Route path="/page4" element={<Page4 />} />
          <Route path="/page27" element={<Page27 />} />
          <Route path="/page26" element={<Page26 />} />
          <Route path="/page25" element={<Page25 />} />
          <Route path="/page5" element={<Page5 />} />
          <Route path="/page6" element={<Page6 />} />
          <Route path="/page7" element={<Page7 />} />
          <Route path="/page8" element={<Page8 />} />
          <Route path="/page9" element={<Page9 />} />
          <Route path="/page10" element={<Page10 />} />
          <Route path="/page11" element={<Page11 />} />
          <Route path="/page12" element={<Page12 />} />
          <Route path="/page13" element={<Page13 />} />
          <Route path="/page14" element={<Page14 />} />
          <Route path="/page15" element={<Page15 />} />
          <Route path="/page24" element={<Page24 />} />
          <Route path="/page16" element={<Page16 />} />
          <Route path="/page17" element={<Page17 />} />
          <Route path="/page18" element={<Page18 />} />
          <Route path="/page19" element={<Page19 />} />
          <Route path="/page20" element={<Page20 />} />
          <Route path="/page21" element={<Page21 />} />
          <Route path="/page22" element={<Page22 />} />
          <Route path="/page31" element={<Page31 />} />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
