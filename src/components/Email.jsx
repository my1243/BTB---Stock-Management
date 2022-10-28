import React, { useState, useEffect } from "react";
import { useAlert } from "react-alert";
import { Link } from "react-router-dom";


const Email = () => {

    const [isActive1, setIsActive1] = useState(true);
    const [isActive2, setIsActive2] = useState(false);
    return (
        <>
            {isActive1 && (
                <div class="flex h-screen">
                    <div class="m-auto rounded-lg  border-blue-700 h-[413px] border-solid border-2 ">
                        <h2 className="my-8 px-8">Enter your email</h2>
                        <div className="flex flex-col">
                            <input type="text" className="w-[400px] bg-gray-100 bg-opacity-50 rounded border border-gray-800 mx-8 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out "></input>
                            <button onClick={() => { setIsActive1(!isActive1); setIsActive2(!isActive2) }} className="mt-40 place-self-center bg-blue-200 rounded-lg w-1/5 h-10 border-black border-solid border-2 font-semibold hover:bg-blue-300 "  >next</button>
                        </div>
                    </div>
                    {/* {()=>{setIsActive1(!isActive1); setIsActive2(!isActive2)} } */}
                </div>
            )}
            {isActive2 && (
                <div class="flex h-screen">
                    <div class="m-auto rounded-lg border-blue-700 border-solid border-2 ">
                        <h2 className="my-8 px-8">Enter your email</h2>
                        <div className="flex flex-col">
                            <input type="text" className="w-[400px] bg-gray-100 bg-opacity-50 rounded border border-gray-800 mx-8 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out "></input>
                        </div>
                        <div className="flex flex-col">
                            <label className="my-8 px-8">Enter the new password</label>
                            <input type="text" className="w-[400px] bg-gray-100 bg-opacity-50 rounded border border-gray-800 mx-8 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 leading-8 transition-colors duration-200 ease-in-out "></input>
                            <button onClick={() => { setIsActive1(!isActive1); setIsActive2(!isActive2) }} className="my-16 place-self-center bg-blue-200 rounded-lg w-1/5 h-10 border-black border-solid border-2 font-semibold hover:bg-blue-300 ">reset</button>
                        </div>
                        
                    </div>

                </div>
            )}

        </>
    )
}

export default Email;