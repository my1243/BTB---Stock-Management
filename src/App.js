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
import Navbar1 from "./components/after/Navbar";
import Hello from "./components/after/Hello";
import Fifth from "./components/Home/Fifth";
import  Model3 from "./components/after/Model3";
import Fourth from "./components/Home/Fourth";
import Third from "./components/Home/Third";
import Compare from "./components/after/Compare";
import Editprofile from "./components/after/Editprofile"; 
import Sidebar from "./components/after/Sidebar";
import Home1 from "./components/after/Home1";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
        <Route element={
            <>
            <div className="grid grid-cols-5">
                <Navbar1/>
                <Sidebar/>
                <section className="col-span-4">
                    <Outlet/>
                </section>
            </div>
            </>
        }
        >
            <Route path="/portfolio" element={<Home1/>} />
              <Route path="/portfolio/compare" element={<Compare/>} />
              <Route path="/portfolio/addStock" element={<Model3/>} />
              <Route path="/portfolio/edit-profile" element={<Editprofile/>} />
         </Route>
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
            <Route path="/edit" element={<Editprofile />} />

          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
