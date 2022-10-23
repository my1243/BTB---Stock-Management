import React, { useEffect, useState } from "react";
import LineChart from "./Chartcomp";
import Navbar1 from "./Navbar";

const Compare = () => {
    const data1 = [134.09,133.225,131.78,130.79,133.35,132.67,132.2866,132.862,132.78,132.7,131,129.81,129.43,129.3,129.1257,128.32,128.81,130.72,132.56,140.31,140.68,139.43,138.9,141.55,141.87,141.3203,141.325,139.14,139.97,141.67,142.46]
    const data2 = [172.17,170.99,169.34,165.82,167.81,165.85,167.19,166.59,162.41,163.59,163.63,157.64,157.33,153.085,155.04,156.28,155.57,153.72,151.23,151.57,150.86,148.95,146.45,148.45,146.64,147.55,146.55,144.12,141.61,139.04,138.37]
    const data3 = [446,445.61,443.22,434.59,440.3,434.5425,431.15,426.04,412.42,417.16,411.38,406.15,394.91,393.58,400.7688,414.62,409.65,403.13,388.32,385.565,384.47,374.194,374.41,391.515,388.05,391.86,392.07,385.385,378.52,369.529,370.42
        ]

    const [com,setCom] = useState("");
    const [symbol1, setSymbol1] = useState("IBM");
    const [symbol2, setSymbol2] = useState("AAPL");
    const [symbol3, setSymbol3] = useState("ADBE");

    const handleInput1 = (event) => {
        event.preventDefault();
        // console.log(companySym);
        setSymbol1(com);
    }

    const handleInput2 = (event) => {
        event.preventDefault();
        // console.log(companySym);
        setSymbol2(com);
    }

    const handleInput3 = (event) => {
        event.preventDefault();
        // console.log(companySym);
        setSymbol3(com);
    }
    
    return(
        <>
            <div className="flex my-4 gap-4 max-w-[77vw]">

            {/* 11111111 */}
                            <div className="w-1/3 bg-blue-200 p-4 rounded-xl">
        <form className="flex justify-center mb-4" onSubmit={handleInput1}>
          <input
            className="bg-gray-50 w-96 px-3 py-2 rounded-lg outline-none" value={com} onChange={(e) => setCom(e.target.value)}
            placeholder="&#128269; Search for stock and more..."
          />
        </form>
        <div className="flex flex-row justify-between items-center text-slate-900 font-medium text-md mb-2">
          <h1>Open</h1>
          <h3>132.62</h3>
        </div>
        <div className="flex flex-row justify-between items-center text-slate-900 font-medium text-md mb-2">
          <h1>Close</h1>
          <h3>134.01</h3>
        </div>
        <div className="flex flex-row justify-between items-center text-slate-900 font-medium text-md mb-2">
          <h1>Day Range</h1>
          <h3>131.98 - 134.09</h3>
        </div>
        <div className="flex flex-row justify-between items-center text-slate-900 font-medium text-md mb-2">
          <h1>Volume</h1>
          <h3>2767054</h3>
        </div>
      </div>
                    
            {/* 2222222 */}

            <div className="w-1/3 bg-blue-200 p-4 rounded-xl">
        <form className="flex justify-center mb-4" onSubmit={handleInput2}>
          <input
            className="bg-gray-50 w-96 px-3 py-2 rounded-lg outline-none" value={com} onChange={(e) => setCom(e.target.value)}
            placeholder="&#128269; Search for stock and more..."
          />
        </form>
        <div className="flex flex-row justify-between items-center text-slate-900 font-medium text-md mb-2">
          <h1>Open</h1>
          <h3>169.82</h3>
        </div>
        <div className="flex flex-row justify-between items-center text-slate-900 font-medium text-md mb-2">
          <h1>Close</h1>
          <h3>172.1</h3>
        </div>
        <div className="flex flex-row justify-between items-center text-slate-900 font-medium text-md mb-2">
          <h1>Day Range</h1>
          <h3>169.4 - 172.17</h3>
        </div>
        <div className="flex flex-row justify-between items-center text-slate-900 font-medium text-md mb-2">
          <h1>Volume</h1>
          <h3>68039382</h3>
        </div>
      </div>

      {/* 3333 */}

      <div className="w-1/3 bg-blue-200 p-4 rounded-xl">
        <form className="flex justify-center mb-4" onSubmit={handleInput3}>
          <input
            className="bg-gray-50 w-96 px-3 py-2 rounded-lg outline-none" value={com} onChange={(e) => setCom(e.target.value)}
            placeholder="&#128269; Search for stock and more..."
          />
        </form>
        <div className="flex flex-row justify-between items-center text-slate-900 font-medium text-md mb-2">
          <h1>Open</h1>
          <h3>439.61</h3>
        </div>
        <div className="flex flex-row justify-between items-center text-slate-900 font-medium text-md mb-2">
          <h1>Close</h1>
          <h3>445.67</h3>
        </div>
        <div className="flex flex-row justify-between items-center text-slate-900 font-medium text-md mb-2">
          <h1>Day Range</h1>
          <h3>436.58 - 446</h3>
        </div>
        <div className="flex flex-row justify-between items-center text-slate-900 font-medium text-md mb-2">
          <h1>Volume</h1>
          <h3>2150845</h3>
        </div>
      </div>

      {/* end */}
            </div>
            <div>
                <LineChart d1={data1} d2={data2} d3={data3}/>               
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