import React from "react";
import LineChart from "./Chartcomp";
import Navbar1 from "./Navbar";

const Compare = () => {
    return(
        <>
            <Navbar1/>
            <div className="flex p-4">
                {
                    [...Array(3)].map((_,idx) => {
                        return(
                            <CompareFormat/>
                        )
                    })
                }
            </div>
            <div>
                <LineChart/>               
            </div>
        </>
    )
};

const CompareFormat = () => {
  return (
    <>
      <div className="w-1/3 mx-4 bg-blue-200 p-4 rounded-xl">
        <form className="flex justify-center mb-4">
          <input
            className="bg-gray-50 w-96 px-3 py-2 rounded-lg outline-none"
            placeholder="&#128269; Search for stock and more..."
          />
        </form>
        <h1 className="font-bold text-xl text-center text-blue-900 mb-2">Company Name</h1>
        <div className="flex flex-row justify-between items-center text-slate-900 font-medium text-md mb-2">
          <h1>Open</h1>
          <h3>132.360</h3>
        </div>
        <div className="flex flex-row justify-between items-center text-slate-900 font-medium text-md mb-2">
          <h1>Close</h1>
          <h3>132.125</h3>
        </div>
        <div className="flex flex-row justify-between items-center text-slate-900 font-medium text-md mb-2">
          <h1>Day Range</h1>
          <h3>123 - 531</h3>
        </div>
        <div className="flex flex-row justify-between items-center text-slate-900 font-medium text-md mb-2">
          <h1>Volume</h1>
          <h3>3494817</h3>
        </div>
      </div>
    </>
  );
};

export default Compare;