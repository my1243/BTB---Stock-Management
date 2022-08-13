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
import  Model3 from "./components/Home/Model3";


const App = () => {



  return (
    <>
      <Router>
        <Routes>
            <Route path="/portfolio" element={<Home1/>} />
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
            <Route path="/after" element={<Home1 />} />
            <Route path="/after1" element={<Hello />} />
            <Route path="/model" element={<Model3 />} />

          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
