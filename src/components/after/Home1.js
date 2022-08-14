import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Favourites from "./Favourites";
import First from "./First";
import Hello from "./Hello";
import TradeView from "./TradingView";
import Watchlist from "./WatchList";


const Home1 = () => {
    const [companySym, setCompanySym] = useState("");
    const [findsym,setfindsym] = useState("AAPL");
    const handleInputs = (event) => {
        event.preventDefault();
        console.log(companySym);
        setfindsym(companySym);
    }

    const [details,setDetails] = useState({});
    useEffect(() => {
        const fetchApi = async () => {
            console.log('m');
            const url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${findsym}&apikey=GEUNO2UYHPF6Q8X9`
            const response = await fetch(url);
            const resJson = await response.json();
            setDetails(resJson);
            console.log(details);
        }
        fetchApi();
    },[findsym]);

  return (
    <>
      <div className="flex flex-row justify-between px-4 items-center">
        <div>
        <Link to="/portfolio"><h1 className="text-2xl font-bold uppercase">Investor's Choice</h1></Link>
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
            <div className="mx-10">
              <button className="inline-flex items-center text-slate-900 bg-gray-100 border-0 py-1 px-3 focus:outline-none rounded-lg text-base mt-4 md:mt-0 hover:bg-orange-500 hover:text-white transition-colors duration-300 ease-linear"><Link to={"/"}>Log Out</Link></button>
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
        <div className="w-4/5 px-4 max-h-screen py-[10px] mr-2 bg-gray-200 rounded-lg">
          <Favourites/>
          <TradeView comsym = {findsym}/>
        </div>
      </div>
    ) : (<p>Details not found</p>)}
      
    </>
  );
};

export default Home1;