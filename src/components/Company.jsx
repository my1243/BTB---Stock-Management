import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAlert } from "react-alert";
import Navbar from "./Navbar";
import Navbar1 from "./after/Navbar";
import { useEffect } from "react";
import ReactTradingviewWidget from "react-tradingview-widget";
import Footer from "./Footer";

const Company = (props) => {
  const symbol = props.csys || "IBM";
  const [user, setuser] = useState([]);
  useEffect(() => {
    const getuser = async () => {
      const res = await fetch(
        `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=GEUNO2UYHPF6Q8X9`
      );
      setuser(await res.json());
      console.log(user);
    };
    getuser();
  }, [symbol]);
  return (
    <>
      <Navbar1 setuser={props.setuser} setsys={props.setsys} />
      {Object.keys(user).length > 0 ? (
        <>
          <div className="mx-24 my-12">
            <div>
              <div className="flex">
                <div className="border text-3xl font-extrabold p-2 w-20 h-20 mr-4">
                  <div className="bg-blue-100 h-full w-full flex justify-center items-center text-blue-900">
                    {user.Name.charAt(0)}
                  </div>
                </div>
                <div>
                  <h1 className="text-2xl font-bold"> {user.Name}</h1>
                  <div className="mt-2 text-slate-600 gap-x-8 flex justify-start">
                    <h2>SYMBOL: {user.Symbol}</h2>
                    <h2>CIK: {user.CIK}</h2>
                    <h2>SECTOR: {user.Sector}</h2>
                  </div>
                </div>
              </div>
              <div className="my-6 text-lg gap-x-8 columns-2 text-slate-700">
                {user.Description}
              </div>
              <div className="text-lg text-slate-700 capitalize">
                <h6 className="">
                  <i class="fa-solid fa-hand-holding-dollar mr-4"></i> Asset
                  Type : {user.AssetType}
                </h6>
                <h5 className="">
                  <i class="fa-sharp fa-solid fa-location-dot mr-7"></i>
                  Address : {user.Address}
                </h5>
                <h5 className="">
                  <i class="fa-solid fa-industry mr-4"></i> Industry :{" "}
                  {user.Industry}
                </h5>
              </div>
            </div>
          </div>

          {/* Ratios */}
          <div className="my-12 mx-24">
            <h1 className="text-4xl font-bold mb-6">
              <i class="fa-solid fa-percent mr-3"></i>Key Ratios
            </h1>
            <div className="grid grid-cols-4 gap-8">
              <div className="p-8 border-2 flex justify-center items-center flex-col shadow-md rounded-xl bg-sky-200">
                <h1 className="font-semibold mb-4 tracking-wider text-xl text-gray-600">
                  PEG Ratio
                </h1>
                <h3 className="font-medium text-lg text-blue-900">
                  {user.PEGRatio}
                </h3>
              </div>
              <div className="p-8 border-2 flex justify-center items-center flex-col shadow-md rounded-xl bg-sky-200">
                <h1 className="font-semibold mb-4 tracking-wider text-xl text-gray-600">
                  PE Ratio
                </h1>
                <h3 className="font-medium text-lg text-blue-900">
                  {user.PERatio}
                </h3>
              </div>
              <div className="p-8 border-2 flex justify-center items-center flex-col shadow-md rounded-xl bg-sky-200">
                <h1 className="font-semibold mb-4 tracking-wider text-xl text-gray-600">
                  Price To Sales Ratio
                </h1>
                <h3 className="font-medium text-lg text-blue-900">
                  {user.PriceToSalesRatioTTM} (TTM)
                </h3>
              </div>
              <div className="p-8 border-2 flex justify-center items-center flex-col shadow-md rounded-xl bg-sky-200">
                <h1 className="font-semibold mb-4 tracking-wider text-xl text-gray-600">
                  Price To Book Ratio
                </h1>
                <h3 className="font-medium text-lg text-blue-900">
                  {user.PriceToBookRatio}
                </h3>
              </div>
            </div>
          </div>

          {/* Date/Events */}
          <div className="my-12 mx-24">
            <h1 className="text-4xl font-bold mb-6">
              <i class="fa-solid fa-calendar-days mr-3"></i>Date / Events
            </h1>
            <div className="grid grid-cols-4 gap-8">
              <div className="p-8 border-2 flex justify-center items-center flex-col shadow-md rounded-xl bg-lime-400">
                <h1 className="font-semibold mb-4 tracking-wider text-xl text-gray-600">
                  Dividend Date
                </h1>
                <h3 className="font-medium text-lg text-blue-900">
                  {user.DividendDate}
                </h3>
              </div>
              <div className="p-8 border-2 flex justify-center items-center flex-col shadow-md rounded-xl bg-lime-400">
                <h1 className="font-semibold mb-4 tracking-wider text-xl text-gray-600">
                  Ex-Dividend Date
                </h1>
                <h3 className="font-medium text-lg text-blue-900">
                  {user.ExDividendDate}
                </h3>
              </div>
              <div className="p-8 border-2 flex justify-center items-center flex-col shadow-md rounded-xl bg-lime-400">
                <h1 className="font-semibold mb-4 tracking-wider text-xl text-gray-600">
                  Latest Quarter
                </h1>
                <h3 className="font-medium text-lg text-blue-900">
                  {user.LatestQuarter}
                </h3>
              </div>
              <div className="p-8 border-2 flex justify-center items-center flex-col shadow-md rounded-xl bg-lime-400">
                <h1 className="font-semibold mb-4 tracking-wider text-xl text-gray-600">
                  Fiscal Year End
                </h1>
                <h3 className="font-medium text-lg text-blue-900">
                  {user.FiscalYearEnd}
                </h3>
              </div>
            </div>
          </div>

          {/* Fundamentals */}
          <div className="mx-24 my-12">
            <h1 className="text-4xl font-bold mb-6">
              <i class="fa-solid fa-book mr-3"></i>Fundamentals
            </h1>
            <div className="grid grid-cols-3 gap-x-20 gap-y-4 bg-gray-200 p-4 rounded-lg">
              <div className="flex justify-between">
                <h1 className="text-gray-600">Market Cap</h1>
                <h3 className="font-semibold text-slate-900">
                  {user.MarketCapitalization.substring(
                    0,
                    user.MarketCapitalization.length - 7
                  )}
                  .
                  {user.MarketCapitalization.substring(
                    user.MarketCapitalization.length - 7,
                    user.MarketCapitalization.length - 5
                  )}
                  Cr
                </h3>
              </div>
              <div className="flex justify-between">
                <h1 className="text-gray-600">EBITDA</h1>
                <h3 className="font-semibold text-slate-900">
                  {user.EBITDA.substring(0, user.EBITDA.length - 7)}.
                  {user.EBITDA.substring(
                    user.EBITDA.length - 7,
                    user.EBITDA.length - 5
                  )}
                  Cr
                </h3>
              </div>
              <div className="flex justify-between">
                <h1 className="text-gray-600">Dividend Yield</h1>
                <h3 className="font-semibold text-slate-900">
                  {user.DividendYield}
                </h3>
              </div>
              <div className="flex justify-between">
                <h1 className="text-gray-600">EPS</h1>
                <h3 className="font-semibold text-slate-900">{user.EPS}</h3>
              </div>
              <div className="flex justify-between">
                <h1 className="text-gray-600">Revenue Per Share (TTM)</h1>
                <h3 className="font-semibold text-slate-900">
                  {user.RevenuePerShareTTM}
                </h3>
              </div>
              <div className="flex justify-between">
                <h1 className="text-gray-600">Profit Margin</h1>
                <h3 className="font-semibold text-slate-900">
                  {user.ProfitMargin}
                </h3>
              </div>
              <div className="flex justify-between">
                <h1 className="text-gray-600">Operating Margin (TTM)</h1>
                <h3 className="font-semibold text-slate-900">
                  {user.OperatingMarginTTM}
                </h3>
              </div>
              <div className="flex justify-between">
                <h1 className="text-gray-600">Return On Assets (TTM)</h1>
                <h3 className="font-semibold text-slate-900">
                  {user.ReturnOnAssetsTTM}
                </h3>
              </div>
              <div className="flex justify-between">
                <h1 className="text-gray-600">Return On Equity (TTM)</h1>
                <h3 className="font-semibold text-slate-900">
                  {user.ReturnOnEquityTTM}
                </h3>
              </div>
              <div className="flex justify-between">
                <h1 className="text-gray-600">Revenue (TTM)</h1>
                <h3 className="font-semibold text-slate-900">
                  {user.RevenueTTM.substring(0, user.RevenueTTM.length - 7)}.
                  {user.RevenueTTM.substring(
                    user.RevenueTTM.length - 7,
                    user.RevenueTTM.length - 5
                  )}
                  Cr
                </h3>
              </div>
              <div className="flex justify-between">
                <h1 className="text-gray-600">Gross Profit (TTM)</h1>
                <h3 className="font-semibold text-slate-900">
                  {user.GrossProfitTTM.substring(
                    0,
                    user.GrossProfitTTM.length - 7
                  )}
                  .
                  {user.GrossProfitTTM.substring(
                    user.GrossProfitTTM.length - 7,
                    user.GrossProfitTTM.length - 5
                  )}
                  Cr
                </h3>
              </div>
              <div className="flex justify-between">
                <h1 className="text-gray-600">Diluted EPS (TTM)</h1>
                <h3 className="font-semibold text-slate-900">
                  {user.DilutedEPSTTM}
                </h3>
              </div>
              <div className="flex justify-between">
                <h1 className="text-gray-600">
                  Quarterly Earnings Growth (YOY)
                </h1>
                <h3 className="font-semibold text-slate-900">
                  {user.QuarterlyEarningsGrowthYOY}
                </h3>
              </div>
              <div className="flex justify-between">
                <h1 className="text-gray-600">
                  Quarterly Revenue Growth (YOY)
                </h1>
                <h3 className="font-semibold text-slate-900">
                  {user.QuarterlyRevenueGrowthYOY}
                </h3>
              </div>
              <div className="flex justify-between">
                <h1 className="text-gray-600">Analyst Target Price</h1>
                <h3 className="font-semibold text-slate-900">
                  {user.AnalystTargetPrice}
                </h3>
              </div>
              <div className="flex justify-between">
                <h1 className="text-gray-600">Trailing PE</h1>
                <h3 className="font-semibold text-slate-900">
                  {user.TrailingPE}
                </h3>
              </div>
              <div className="flex justify-between">
                <h1 className="text-gray-600">Forward PE</h1>
                <h3 className="font-semibold text-slate-900">
                  {user.ForwardPE}
                </h3>
              </div>
              <div className="flex justify-between">
                <h1 className="text-gray-600">EV To Revenue</h1>
                <h3 className="font-semibold text-slate-900">
                  {user.EVToRevenue}
                </h3>
              </div>
            </div>
          </div>

          {/* Chart Component */}
          <div className="mx-24 my-12">
            <h5 className="text-4xl font-bold mb-6">
              <i class="fa-solid fa-chart-column mr-3"></i> Advanced Chart
            </h5>
            <div className="h-[32rem] rounded-xl overflow-hidden border-2 border-slate-600">
              <ReactTradingviewWidget symbol={user.Symbol} style="3" autosize />
            </div>
          </div>
        </>
      ) : (
        <div>loading</div>
      )}
      <Footer />
    </>
  );
};

export default Company;
