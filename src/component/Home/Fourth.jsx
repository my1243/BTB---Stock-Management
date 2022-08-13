import React from "react";
import pic from "./pic.jpg";

const Fourth = () => {

    return (
        <>
            <div className="mt-20" >
                <div className="flex  flex-rows  place-content-around ">
                    <div className="flex flex-col ml-52 mt-10">
                        <div className="text-3xl font-bold my-5 w-full">
                            <h2>StockADD</h2>
                            <h2>Stocks in your account</h2>
                        </div>
                        <div>
                            <p className="text-xl w-4/5  font-semibold">
                                Here, you can add stocks and also search for other stocks to add in your account. This page also shows your those stocks
                                which had selected by you as favourite stocks.
                            </p>
                        </div>
                    </div>
                    <div className="w-full">
                            <img src={pic} className="rounded-lg shadow-lg shadow-gray-500 mb-10 w-96 h-96 ml-20 -mr-80" />
                    </div>
                </div>

            </div>
        </>
    )

}

export default Fourth;
