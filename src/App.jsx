import { Routes, Route } from "react-router-dom";
import Header from "./views/Header";
import Footer from "./views/Footer";
import routes from "./routes";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        {routes.map((route, index) => {
          return (
            <Route
              key={index}
              path={route.path}
              element={route.element}
              exact
            />
          );
        })}
      </Routes>
      <Footer />
    </>
  );
};

export default App;
