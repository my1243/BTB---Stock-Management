import React from "react";
import First from "./First";
import Hello from "./Hello";
import Watchlist from "./WatchList";

const Sidebar = (props) => {
    return(
        <>
        <nav className="grid-span-1 px-4 sticky top-0">
            <Watchlist/>
            <Hello/>
            <First csys={props.sys}/>
        </nav>
        </>
    )
}

export default Sidebar;