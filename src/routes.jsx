import AboutUs from "./views/UI/AboutUs";
import ApplyNow from "./views/UI/ApplyNow";
import Blog from "./views/UI/Blog";
import Careers from "./views/UI/Careers";
import Courses from "./views/UI/Courses";
import Faq from "./views/UI/Faq";
import HowItWorks from "./views/UI/HowItWorks";
import Partners from "./views/UI/Partners";
import SignIn from "./views/UI/SignIn";
import Tuition from "./views/UI/Tuition";

const routes = () => [
  { path: "/aboutUs", element: <AboutUs /> },
  { path: "/howItWorks", element: <HowItWorks /> },
  { path: "/courses", element: <Courses /> },
  { path: "/tuition", element: <Tuition /> },
  { path: "/partners", element: <Partners /> },
  { path: "/blog", element: <Blog /> },
  { path: "/careers", element: <Careers /> },
  { path: "/faq", element: <Faq /> },
  { path: "/signin", element: <SignIn /> },
  { path: "/applynow", element: <ApplyNow /> },
];

export default routes;
