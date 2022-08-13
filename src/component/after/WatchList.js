import React from "react";

const Watchlist = () => {
    return(
        <>
            <h1 className="text-lg font-medium mb-2 uppercase">Watchlist</h1>
            <div className="flex justify-between items-center py-1 px-2 bg-gray-200 rounded-lg mb-2">
                <div className="flex items-center">
                    <div className="h-10 w-10 m-1"><img className="rounded-full" src="sensex.png"></img></div>
                    <h1>Sensex</h1>
                </div>
                <h3>50445.43</h3>
            </div>
            <div className="flex justify-between items-center py-1 px-2 bg-gray-200 rounded-lg">
                <div className="flex items-center">
                    <div className="h-10 w-10 m-1"><img className="rounded-full" src="nifty.png"></img></div>
                    <h1>Nifty</h1>
                </div>
                <h3>45792.43</h3>
            </div>
        </>
    )
}

export default Watchlist;