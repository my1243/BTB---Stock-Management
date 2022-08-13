import React from "react";
const First = (props) => {
  return (
    <>
        <h1 className="text-lg font-medium mb-2 text-slate-800 uppercase">Details</h1>
        <div className="bg-gray-200 rounded-lg flex flex-col justify-evenly h-72">
            <h1 className="text-lg font-semibold text-red-500 text-center">{props.data.Name}</h1>
            <div className="text-md px-2 font-medium text-slate-900 flex flex-row justify-between">
                <h1>Market Cap</h1>
                <h3>{props.data.MarketCapitalization}</h3>
            </div>
            <div className="text-md px-2 font-medium text-slate-900 flex flex-row justify-between">
                <h1>52 week Range</h1>
                <h3>{props.data['52WeekLow']} - {props.data['52WeekHigh']}</h3>
            </div>
            <div className="text-md px-2 font-medium text-slate-900 flex flex-row justify-between">
                <h1>Dividend Per Share</h1>
                <h3>{props.data.DividendPerShare}</h3>
            </div>
            <div className="text-md px-2 font-medium text-slate-900 flex flex-row justify-between">
                <h1>Revenue(TTM)</h1>
                <h3>{props.data.RevenueTTM}</h3>
            </div>
            <div className="text-md px-2 font-medium text-slate-900 flex flex-row justify-between">
                <h1>Gross Profit(TTM)</h1>
                <h3>{props.data.GrossProfitTTM}</h3>
            </div>
            <div className="text-md px-2 font-medium text-slate-900 flex flex-row justify-between">
                <h1>PE Ratio</h1>
                <h3>{props.data.PERatio}</h3>
            </div>
            <div className="text-md px-2 font-medium text-slate-900 flex flex-row justify-between">
                <h1>EPS</h1>
                <h3>{props.data.EPS}%</h3>
            </div>
        </div>
    </>
  );
};

export default First;
