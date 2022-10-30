import React, { useEffect, useState } from "react";
import { useAlert } from "react-alert";
import ReactTradingviewWidget from "react-tradingview-widget";

const TradeView = (props) => {
    const sys = props.csys || "AAPL";
    const emai = props.emai;
    const favitems = props.favitems;
    const [isFavourite,setisFavourite] = useState(false);

    useEffect(() => {
        let chk = false;
        favitems.map((vl,idx) => {
            if(vl === sys){
                chk = true;
            }
        })  
         if(chk){
            setisFavourite(true);
         }else{
            setisFavourite(false);
         }
    },[sys]);

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
            setisFavourite(true);
            console.log("symbol saved.");
        }
    }

    const patchData = async () => {
        const email = emai;
        const symbol = sys;
        const res = await fetch("/favourites", {
            method:"PATCH",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email, symbol
            })
        });
        const data = await res.json();
        if(res.status === 200){
            alert.info("Symbol removed from favourites.");
            setisFavourite(false);
        }else{
            alert.error("Symbol can't removed. Please try after some time");
        }
    } 

    return(
        <>
        {   
            props.favitems ? 
            <div className="px-4 py-2 rounded-xl shadow-xl h-[64vh] bg-white">
            <div className="flex flex-row justify-between items-center">
                <h1 className="mb-2 text-xl font-semibold">Stock Watchlist</h1>
                <button onClick={() => {isFavourite ? patchData() : postData()}} className={`w-8 h-8 my-1 mx-2 bg-gray-200 rounded-full transition-all duration-150 ease-in ${isFavourite ? 'text-red-500 hover:text-black' : 'text-black hover:text-red-500'}`}><i class="fa-solid fa-heart"></i></button>
            </div>
                <div className="h-[90%] rounded-xl overflow-hidden border-2 border-slate-600">
                    <ReactTradingviewWidget hide_top_toolbar={true} symbol={sys} style="3" autosize/> 
                </div>
            </div>
            :
            <p>loading...</p>
        }
        </>
    )
}

export default TradeView;