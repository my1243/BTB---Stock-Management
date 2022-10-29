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
import Viewprofile from "./components/after/Viewprofile";
import Email from "./components/Email";
import { useState } from "react";
import Company from "./components/Company";

const App = () => {
    const [sys,setsys] = useState("AAPL");
    const [user,setuser] = useState({});
  return (
    <>
      <Router>
        <Routes>
        <Route element={
            <>
            <div className="grid grid-cols-5">
                <Navbar1 setsys = {setsys} setuser = {setuser} />
                <Sidebar sys = {sys}/>
                <section className="col-span-4">
                    <Outlet/>
                </section>
            </div>
            </>
        }
        >
            <Route path="/portfolio" element={<Home1 sys={sys} user={user} />} />
              <Route path="/portfolio/compare" element={<Compare/>} />
              <Route path="/portfolio/addStock" element={<Model3/>} />
              <Route path="/portfolio/edit-profile" element={<Editprofile user={user} />} />
              <Route path="/portfolio/view-profile" element={<Viewprofile user={user} />}  />
              
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
          <Route>
          <Route path="/forgot-password" element={<Email/>} />
          </Route>
          <Route>
          <Route path="/company" element={<Company />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
