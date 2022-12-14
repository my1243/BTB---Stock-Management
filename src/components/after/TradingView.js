import React from "react";
import ReactTradingviewWidget from "react-tradingview-widget";

const TradeView = (props) => {
    return(
        <>
            <div className="px-4 py-2 rounded-xl shadow-xl h-[64vh] bg-white">
            <div className="flex flex-row justify-between items-center">
                <h1 className="mb-2 text-xl font-semibold">Stock Watchlist</h1>
                <button className="w-8 h-8 my-1 mx-2 bg-gray-200 rounded-full  hover:text-red-600 transition-all duration-150 ease-in"><i class="fa-solid fa-heart"></i></button>
            </div>
                <div className="h-[90%] rounded-xl overflow-hidden border-2 border-slate-600">
                    <ReactTradingviewWidget hide_top_toolbar={true} symbol={props.comsym} style="3" autosize/> 
                </div>
            </div>
        </>
    )
}

export default TradeView;