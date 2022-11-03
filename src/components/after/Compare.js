import React, { useEffect, useState } from "react";
import LineChart from "./Chartcomp";
import Navbar1 from "./Navbar";

const Compare = () => {
    const [data1 ,setdata1] = useState([]);
    const [data2 ,setdata2] = useState([]);
    const [data3 ,setdata3] = useState([]);

    const [symbol1, setSymbol1] = useState("");
    const [symbol2, setSymbol2] = useState("");
    const [symbol3, setSymbol3] = useState("");

        const getData1 = async (event) => {
            event.preventDefault();
            const url = `https://financialmodelingprep.com/api/v3/historical-price-full/${symbol1}?timeseries=31&serietype=line&apikey=f19c42e71d703ddcab3c9053e367551c`;
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data);
            setdata1(() => data.historical);
        }
        
        const getData2 = async (event) => {
            event.preventDefault();
            const url = `https://financialmodelingprep.com/api/v3/historical-price-full/${symbol2}?timeseries=31&serietype=line&apikey=f19c42e71d703ddcab3c9053e367551c`;
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data);
            setdata2(() => data.historical);
        } 

        const getData3 = async (event) => {
            event.preventDefault();
            const url = `https://financialmodelingprep.com/api/v3/historical-price-full/${symbol3}?timeseries=31&serietype=line&apikey=f19c42e71d703ddcab3c9053e367551c`;
            const res = await fetch(url);
            const data = await res.json();
            // console.log(data);
            setdata3(() => data.historical);
        }
    
    return(
        <>
            <div className="flex my-4 gap-4 max-w-[77vw]">

            {/* 11111111 */}
                            <div className="w-1/3 bg-blue-200 p-4 rounded-xl">
        <form className="flex justify-center mb-4" onSubmit={getData1}>
          <input
            className="bg-gray-50 w-96 px-3 py-2 rounded-l-lg outline-none" value={symbol1} name="symbol1" id="symbol1" onChange={(e) => setSymbol1(e.target.value)}
            placeholder="Search for stock and more..."
          />
          <button className="bg-gray-50 px-2 border-l-2 rounded-r-lg" type="submit">&#128269;</button>
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
        <form className="flex justify-center mb-4" onSubmit={getData2}>
          <input
            className="bg-gray-50 w-96 px-3 py-2 rounded-l-lg outline-none" value={symbol2} name="symbol2" id="symbol2" onChange={(e) => setSymbol2(e.target.value)}
            placeholder="Search for stock and more..."
          />
          <button className="bg-gray-50 px-2 border-l-2 rounded-r-lg" type="submit">&#128269;</button>
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
        <form className="flex justify-center mb-4" onSubmit={getData3}>
          <input
            className="bg-gray-50 w-96 px-3 py-2 rounded-l-lg outline-none" value={symbol3} name="symbol3" id="symbol3" onChange={(e) => setSymbol3(e.target.value)}
            placeholder="Search for stock and more..."
          />
          <button className="bg-gray-50 px-2 border-l-2 rounded-r-lg" type="submit">&#128269;</button>
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
            </div>

      {/* end */}
            { (data1.length > 30 && data2.length > 30 && data3.length > 30) ? 
            <div>
                <LineChart c1={symbol1} c2={symbol2} c3={symbol3} k1={data1} d2={data2} d3={data3}/>               
            </div>
            :
            <p>loading</p>
            }
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