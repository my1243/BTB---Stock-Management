import React, { useEffect, useState } from "react";
import Favourites from "./Favourites";
import TradeView from "./TradingView";

const Home1 = (props) => {
    return(
        <>
        <section className="mr-2 px-4 py-2 bg-gray-200 rounded-lg">
            { Object.keys(props.user).length > 0 ?
            <>
            <Favourites favitems = {props.user.favourites}/>
            <TradeView emai = {props.user.email} favitems = {props.user.favourites} csys = {props.sys}/>
            </>     :
            <p>loading...</p>
            }
        </section>
        </>
    )
}

export default Home1;