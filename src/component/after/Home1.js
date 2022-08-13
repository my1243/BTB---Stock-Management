import React, { useState, useEffect } from "react";
import Favourites from "./Favourites";
import First from "./First";
import Hello from "./Hello";
import TradeView from "./TradingView";
import Watchlist from "./WatchList";

const item = [
    { name: "apple" },
    { name: "apple3" },
    { name: "orange" },
    { name: "orange3" },
    { name: "pear" },
    { name: "pear1" },
]

const Home1 = () => {
    const [companySym, setCompanySym] = useState("");
    const [symbol,setSymbol] = useState("AAPL");
    const handleInputs = (event) => {
        event.preventDefault();
        console.log(companySym);
        setSymbol(companySym);
    }

    const [details,setDetails] = useState({});
    useEffect(() => {
        const fetchApi = async () => {
            console.log('m');
            const url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=GEUNO2UYHPF6Q8X9`
            const response = await fetch(url);
            const resJson = await response.json();
            setDetails(resJson);
            console.log(details);
        }
        fetchApi();
    },[symbol]);

  return (
    <>
      <div className="flex flex-row justify-between px-4 items-center">
        <div>
            <h1 className="text-2xl font-bold uppercase">Portfolio</h1>
        </div>
        <div>
            <form className="" onSubmit={handleInputs}>
                <input type={'search'} value={companySym} onChange={(e) => setCompanySym(e.target.value)} className="bg-gray-50 w-96 px-3 py-2 rounded-lg outline-none" placeholder="&#128269; Search for stock and more..."/>
            </form>
        </div>
        <div className="flex flex-row items-center justify-center">
            <div className="h-12 w-12 rounded-full overflow-hidden m-2"><img src="../avatar.jpg"/></div>
            <div>
                <h1 className="font-medium text-md">Barly Vallendito</h1>
                <h3 className="font-medium text-slate-600 text-sm">barleyvallen@gmail.com</h3>
            </div>
        </div>
      </div>

    {details ? (
        <div className="flex flex-row">
        <div className="w-1/5 px-4">
            <Watchlist/>
          <Hello/>
          <First data={details}/>
        </div>
        <div className="w-4/5 px-4 py-2 mr-2 bg-gray-200 rounded-lg">
          <Favourites/>
          <TradeView comsym = {symbol}/>
        </div>
      </div>
    ) : (<p>Details not found</p>)}
      
    </>
  );
};

export default Home1;