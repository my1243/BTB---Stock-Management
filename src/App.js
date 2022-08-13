import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Home1, {cmp} from "./components/after/Home1";
import Hello from "./components/after/Hello";
import Fifth from "./components/Home/Fifth";
import  Model3 from "./components/after/Model3";
import Fourth from "./components/Home/Fourth";
import Third from "./components/Home/Third";
import Compare from "./components/after/Compare";

const App = () => {



  return (
    <>
      <Router>
        <Routes>
            <Route path="/portfolio" element={<Home1/>} />
              <Route path="/portfolio/compare" element={<Compare/>} />
              <Route path="/portfolio/addStock" element={<Model3/>} />
          <Route
            element={
              <>
                <Navbar />
                <Outlet />
                <Footer />
              </>
            }
          >
            <Route path="/" element={<Home />} />
            {/* <Route path="/model" element={<Model3 />} /> */}
            {/* <Route path="/fourth" element={<Fourth />} />
            <Route path="/third" element={<Third />} /> */}

          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
