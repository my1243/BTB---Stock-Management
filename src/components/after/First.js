import React, {useState, useEffect} from "react";

const First = (props) => {
    const symbol = props.csys || "AAPL";
    const [details, setDetails] = useState({});
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
  }, [symbol]);
  return (
    <>
    <h1 className="text-lg font-medium mb-2 text-slate-800 uppercase">Details</h1>
    {
        !details ? 
        <>
        <div className="bg-gray-200 p-4 rounded-lg flex flex-col justify-center h-72">
            <p className="font-semibold text-center text-red-500">No data to show!! Sorry😞</p> 
            <p className="font-semibold text-center text-red-500">Goto dashboard and search for any stocks.</p>
        </div>
        </>
            :
        <> 
    <div className="bg-gray-200 rounded-lg flex flex-col justify-evenly h-72">
            <h1 className="text-lg font-semibold text-red-500 text-center">{details.Name}</h1>
            <div className="text-md px-2 font-medium text-slate-900 flex flex-row justify-between">
                <h1>Market Cap</h1>
                <h3>{details.MarketCapitalization}</h3>
            </div>
            <div className="text-md px-2 font-medium text-slate-900 flex flex-row justify-between">
                <h1>52 week Range</h1>
                <h3>{details['52WeekLow']} - {details['52WeekHigh']}</h3>
            </div>
            <div className="text-md px-2 font-medium text-slate-900 flex flex-row justify-between">
                <h1>Dividend Per Share</h1>
                <h3>{details.DividendPerShare}</h3>
            </div>
            <div className="text-md px-2 font-medium text-slate-900 flex flex-row justify-between">
                <h1>Revenue(TTM)</h1>
                <h3>{details.RevenueTTM}</h3>
            </div>
            <div className="text-md px-2 font-medium text-slate-900 flex flex-row justify-between">
                <h1>Gross Profit(TTM)</h1>
                <h3>{details.GrossProfitTTM}</h3>
            </div>
            <div className="text-md px-2 font-medium text-slate-900 flex flex-row justify-between">
                <h1>PE Ratio</h1>
                <h3>{details.PERatio}</h3>
            </div>
            <div className="text-md px-2 font-medium text-slate-900 flex flex-row justify-between">
                <h1>EPS</h1>
                <h3>{details.EPS}%</h3>
            </div>
    </div>
        </>
    }
    </>
  );
};

export default First;
