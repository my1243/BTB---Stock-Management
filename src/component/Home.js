import React from "react";
import Fifth from "./Home/Fifth";
import LandingPage from "./Home/LandingPage";
import Second from "./Home/Second";
import Third from "./Home/Third";

const Home = () => {
    return(
        <>
            <LandingPage/>
            <Second/>
            <Third/>
            <Fifth/>
        </>
    )
}

export default Home;