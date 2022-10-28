import React from "react";
import { useAlert } from "react-alert";
import ReactTradingviewWidget from "react-tradingview-widget";

const TradeView = (props) => {
    const sys = props.csys || "AAPL";
    const emai = props.emai;

    const alert = useAlert();

    const postData = async () => {
        const email = emai;
        const symbol = sys;
        const res = await fetch("/favourites", {
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                email, symbol
            })
        });
        const data = await res.json();
        if(!res.status === 200 || !data){
            alert.error(res);
            // window.alert("symbol not saved");
        }else{
            alert.success("Symbol added to favourites!");
            console.log("symbol saved.");
        }
    }

    return(
        <>
            <div className="px-4 py-2 rounded-xl shadow-xl h-[64vh] bg-white">
            <div className="flex flex-row justify-between items-center">
                <h1 className="mb-2 text-xl font-semibold">Stock Watchlist</h1>
                <button onClick={postData} className="w-8 h-8 my-1 mx-2 bg-gray-200 rounded-full  hover:text-red-600 transition-all duration-150 ease-in"><i class="fa-solid fa-heart"></i></button>
            </div>
                <div className="h-[90%] rounded-xl overflow-hidden border-2 border-slate-600">
                    <ReactTradingviewWidget hide_top_toolbar={true} symbol={sys} style="3" autosize/> 
                </div>
            </div>
        </>
    )
}

export default TradeView;