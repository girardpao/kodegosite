import AboutUs from "./views/UI/AboutUs/AboutUs";
import ApplyNow from "./views/UI/ApplyNow/ApplyNow";
import Blog from "./views/UI/Blog/Blog";
import Careers from "./views/UI/Careers/Careers";
import Courses from "./views/UI/Courses/Courses";
import Faq from "./views/UI/Faq/Faq";
import HowItWorks from "./views/UI/HowItWorks/HowItWorks";
import Partners from "./views/UI/Partners/Partners";
import SignIn from "./views/UI/SignIn/SignIn";
import Tuition from "./views/UI/Tuition/Tuition";

const routes = [
  { path: "/", element: <AboutUs /> },
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
