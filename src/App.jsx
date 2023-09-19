import { Routes, Route } from "react-router-dom";
import routes from "./routes";
import Header from "./views/Header/Header";
import Footer from "./views/Footer/Footer";

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
