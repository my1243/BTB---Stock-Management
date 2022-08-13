import React from "react";
import pic from "./pic.jpg";

const Third = () => {

    return (
        <>
            <div className="mt-20" >
                <div className="flex  flex-rows  place-content-around ">
                    <div className="w-full">
                            <img src={pic} className="rounded-lg shadow-lg shadow-gray-500 mb-10 w-96 h-96 ml-56 -mr-80" />
                    </div>
                    <div className="flex flex-col -ml-32">
                        <div className="text-3xl font-bold my-5 w-full">
                            <h2>1,00,000+</h2>
                            <h2>Stocks in your app</h2>
                        </div>
                        <div>
                            <p className="text-xl w-4/5  font-semibold">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum odit nihil cupiditate repellat aliquam sequi perferendis tempore ducimus vitae nobis.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )

}

export default Third;
