import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAlert } from "react-alert";
import Navbar from "./Navbar";
import Navbar1 from "./after/Navbar";
import { useEffect } from "react";

const Company = (props) => {
    // props.csys || "IBM"
    const symbol = "AAPL";
    const [user, setuser] = useState([]);
    useEffect(() => {
        const getuser = async () => {
            const res = await fetch('https://www.alphavantage.co/query?function=OVERVIEW&symbol=AAPL&apikey=GEUNO2UYHPF6Q8X9');
            setuser(await res.json());
            console.log(user);
        }
        getuser();
    }, [symbol]);
    const [isActive1, setIsActive1] = useState(true);
    const [isActive2, setIsActive2] = useState(false);
    let b;
    const a = user.Description;
    if (typeof a === 'string') {
        b = a.slice(0, 371);
    }
    return (
        <>
            {
                user ?
                    <>
                        <div className="flex flex-row">
                            <div className="w-2/3">
                                <div>
                                    <div className="m-8">
                                        <h1 className="text-2xl font-semibold"> {user.Name} ({user.Symbol})</h1>
                                        <h6 className="my-3"> <i class="fa-solid fa-hand-holding-dollar text-3xl"></i> Asset Type : {user.AssetType}</h6>
                                    </div>
                                </div>
                                <div className="">
                                    <h2 className="mx-8 mt-3 font-semibold text-xl"> <i class="fa-solid fa-circle-info text-2xl"></i> About us</h2>
                                    {isActive1 && (
                                        <div className="mx-8 mt-3 line h-[216px]">
                                            {b}
                                            <div>
                                                <button className="ml-[800px] my-3 hover:text-blue-400" onClick={() => {
                                                    setIsActive1(!isActive1); setIsActive2(!isActive2);
                                                }}>....Read more</button>
                                            </div>
                                        </div>
                                    )}
                                    {isActive2 && (
                                        <div className="mx-8 mt-3 line h-[216px]">
                                            {user.Description}
                                            <div>
                                                <button className="ml-[800px] my-3 hover:text-blue-400" onClick={() => {
                                                    setIsActive1(!isActive1); setIsActive2(!isActive2);
                                                }}>....Read less</button>
                                            </div>
                                        </div>
                                    )}
                                    <div className="mx-8 mt-2">
                                        <h5 className="my-3"> <i class="fa-sharp fa-solid fa-location-dot text-2xl"></i> Address : {user.Address}</h5>
                                        <h5 className="my-3"> <i class="fa-solid fa-industry text-2xl"></i> Industry : {user.Industry}</h5>
                                    </div>
                                </div>
                                <div className="mx-8 my-3">
                                    <h1 className="text-xl font-semibold"> <i class="fa-solid fa-magnifying-glass-chart text-2xl"></i> Share market status</h1>
                                </div>
                                <div className="flex flex-row">
                                    <div className="w-1/2 bg-slate-300 rounded-xl m-8 p-3">
                                        <div>
                                            <h2 className="mx-2 mt-3 mb-8 text-2xl font-semibold"> <i class="fa-solid fa-percent text-2xl mx-3"></i> Ratios</h2>
                                        </div>
                                        <div className="mt-3 mx-2 flex justify-between">
                                            <div>
                                                PEGRatio
                                            </div>
                                            <div>
                                                {user.PEGRatio}
                                            </div>
                                        </div>
                                        <div className="mt-3 mx-2 flex justify-between">
                                            <div>
                                                PERatio
                                            </div>
                                            <div>
                                                {user.PERatio}
                                            </div>
                                        </div>
                                        <div className="my-3 mx-2 flex justify-between">
                                            <div>
                                                PriceToSalesRatioTTM
                                            </div>
                                            <div>
                                                {user.PriceToSalesRatioTTM}
                                            </div>
                                        </div>

                                        <div className="my-3 mx-2 flex justify-between">
                                            <div>
                                                PriceToBookRatio
                                            </div>
                                            <div>
                                                {user.PriceToBookRatio}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="w-1/2 bg-slate-300 rounded-xl m-8 p-3">
                                        <div>
                                            <h2 className="mx-2 mt-3 mb-8 text-2xl font-semibold"> <i class="fa-solid fa-calendar-days text-2xl mx-3"></i>  Dates / Events </h2>
                                        </div>
                                        <div className="my-3 mx-2 flex justify-between">
                                            <div>
                                                DividendDate
                                            </div>
                                            <div>
                                                {user.DividendDate}
                                            </div>
                                        </div>
                                        <div className="my-3 mx-2 flex justify-between">
                                            <div>
                                                ExDividendDate
                                            </div>
                                            <div>
                                                {user.ExDividendDate}
                                            </div>
                                        </div>

                                        <div className="my-3 mx-2 flex justify-between">
                                            <div>
                                                LatestQuarter
                                            </div>
                                            <div>
                                                {user.LatestQuarter}
                                            </div>
                                        </div>
                                        <div className="mt-3 mx-2 flex justify-between">
                                            <div>
                                                FiscalYearEnd
                                            </div>
                                            <div>
                                                {user.FiscalYearEnd}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/3 bg-slate-300 rounded-xl m-8 p-3">
                                <div className="mt-3 mx-8 flex justify-between">
                                    <div>
                                        CIK
                                    </div>
                                    <div>
                                        {user.CIK}
                                    </div>
                                </div>
                                <div className="mt-3 mx-8 flex justify-between">
                                    <div>
                                        Currency
                                    </div>
                                    <div>
                                        {user.Currency}
                                    </div>
                                </div>
                                <div className="mt-3 mx-8 flex justify-between">
                                    <div>
                                        Exchange
                                    </div>
                                    <div>
                                        {user.Exchange}
                                    </div>
                                </div>
                                <div className="mt-3 mx-8 flex justify-between">
                                    <div>
                                        MarketCapitalization
                                    </div>
                                    <div>
                                        {user.MarketCapitalization}
                                    </div>
                                </div>

                                <div className="mt-3 mx-8 flex justify-between">
                                    <div>
                                        EBITDA
                                    </div>
                                    <div>
                                        {user.EBITDA}
                                    </div>
                                </div>
                                <div className="my-3 mx-8 flex justify-between">
                                    <div>
                                        DividendYield
                                    </div>
                                    <div>
                                        {user.DividendYield}
                                    </div>
                                </div>
                                <div className="my-3 mx-8 flex justify-between">
                                    <div>
                                        EPS
                                    </div>
                                    <div>
                                        {user.EPS}
                                    </div>
                                </div>
                                <div className="my-3 mx-8 flex justify-between">
                                    <div>
                                        RevenuePerShareTTM
                                    </div>
                                    <div>
                                        {user.RevenuePerShareTTM}
                                    </div>
                                </div>
                                <div className="my-3 mx-8 flex justify-between">
                                    <div>
                                        ProfitMargin
                                    </div>
                                    <div>
                                        {user.ProfitMargin}
                                    </div>
                                </div>
                                <div className="my-3 mx-8 flex justify-between">
                                    <div>
                                        OperatingMarginTTM
                                    </div>
                                    <div>
                                        {user.OperatingMarginTTM}
                                    </div>
                                </div>
                                <div className="my-3 mx-8 flex justify-between">
                                    <div>
                                        ReturnOnAssetsTTM
                                    </div>
                                    <div>
                                        {user.ReturnOnAssetsTTM}
                                    </div>
                                </div>
                                <div className="my-3 mx-8 flex justify-between">
                                    <div>
                                        ReturnOnEquityTTM
                                    </div>
                                    <div>
                                        {user.ReturnOnEquityTTM}
                                    </div>
                                </div>
                                <div className="my-3 mx-8 flex justify-between">
                                    <div>
                                        RevenueTTM
                                    </div>
                                    <div>
                                        {user.RevenueTTM}
                                    </div>
                                </div>
                                <div className="my-3 mx-8 flex justify-between">
                                    <div>
                                        GrossProfitTTM
                                    </div>
                                    <div>
                                        {user.GrossProfitTTM}
                                    </div>
                                </div>
                                <div className="my-3 mx-8 flex justify-between">
                                    <div>
                                        DilutedEPSTTM
                                    </div>
                                    <div>
                                        {user.DilutedEPSTTM}
                                    </div>
                                </div>
                                <div className="my-3 mx-8 flex justify-between">
                                    <div>
                                        QuarterlyEarningsGrowthYOY
                                    </div>
                                    <div>
                                        {user.QuarterlyEarningsGrowthYOY}
                                    </div>
                                </div>
                                <div className="my-3 mx-8 flex justify-between">
                                    <div>
                                        QuarterlyRevenueGrowthYOY
                                    </div>
                                    <div>
                                        {user.QuarterlyRevenueGrowthYOY}
                                    </div>
                                </div>
                                <div className="my-3 mx-8 flex justify-between">
                                    <div>
                                        AnalystTargetPrice
                                    </div>
                                    <div>
                                        {user.AnalystTargetPrice}
                                    </div>
                                </div>
                                <div className="my-3 mx-8 flex justify-between">
                                    <div>
                                        TrailingPE
                                    </div>
                                    <div>
                                        {user.TrailingPE}
                                    </div>
                                </div>
                                <div className="my-3 mx-8 flex justify-between">
                                    <div>
                                        ForwardPE
                                    </div>
                                    <div>
                                        {user.ForwardPE}
                                    </div>
                                </div>
                                <div className="my-3 mx-8 flex justify-between">
                                    <div>
                                        EVToRevenue
                                    </div>
                                    <div>
                                        {user.EVToRevenue}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="m-8">
                            <h5 className="text-xl font-semibold"> <i class="fa-solid fa-chart-column text-3xl mx-3"></i> Advanced Chart</h5>
                        </div>

                        <div>
                            {/* aiya chart aavse */}
                        </div>
                    </>
                    :
                    <div>
                        loading
                    </div>
            }
        </>
    )
}

export default Company;