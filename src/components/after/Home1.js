import React from "react";
import Favourites from "./Favourites";
import TradeView from "./TradingView";

const Home1 = (findsym) => {
    return(
        <>
        <section className="mr-2 px-4 py-2 bg-gray-200 rounded-lg">
            <Favourites/>
            <TradeView csys = {findsym}/>
        </section>
        </>
    )
}

export default Home1;