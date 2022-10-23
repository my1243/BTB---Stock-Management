import { PromiseProvider } from "mongoose";
import React from "react";
import First from "./First";
import Hello from "./Hello";
import Watchlist from "./WatchList";

const Sidebar = (details) => {
    return(
        <>
        <nav className="grid-span-1 px-4">
            <Watchlist/>
            <Hello/>
            <First data={details}/>
        </nav>
        </>
    )
}

export default Sidebar;