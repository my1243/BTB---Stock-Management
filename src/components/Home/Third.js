import React from "react";
import pic from "./pic.jpg";

const Third = () => {

    return (
        <>
            <h1 className="text-6xl pt-12 text-black font-bold mb-6 px-16">Features At A Glance</h1>
            <div className="bg-lime-400 mx-8 rounded-2xl" >
                <div className="flex flex-row items-center justify-center">
                    <div className="w-1/2">
                            
                                <img src={'../pic.png'} className="p-4 m-8 rounded-xl bg-white h-[28rem] w-[40rem]"/>
                    </div>
                    <div className="flex flex-col items-start w-1/2">
                        <div className="text-4xl mb-2 font-bold w-full text-blue-900">
                            <h2>Compare your Stocks in just One Click!</h2>
                        </div>
                            <p className="text-md w-3/4 font-medium">
                                Holla folks, By this app you can compare stocks which 
                                are selected by you. You also can search for other stocks separately. From this app you are able to distinguish stocks by selected conditions.
                            </p>
                    </div>
                </div>
            </div>

            <div className="mb-12 bg-pink-400 rounded-2xl mx-8 mt-8" >
                <div className="flex flex-row items-center justify-center">
                    <div className="flex flex-col items-start p-12 w-1/2">
                        <div className="text-4xl mb-2 font-bold w-full text-blue-900">
                            <h2>Add your purchased Stocks into your Account!</h2>
                        </div>
                            <p className="text-md w-3/4 font-medium">
                            Here, you can add stocks and also search for other stocks to add in your account. This page also shows your those stocks
                                which had selected by you as favourite stocks.
                            </p>
                    </div>
                    <div className="w-1/2">
                    <img src={'../todo.png'} className="p-4 m-8 rounded-xl bg-white h-[28rem] w-[40rem]"/>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Third;
