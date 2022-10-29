import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAlert } from "react-alert";
import Navbar from "./Navbar";
import Navbar1 from "./after/Navbar";
// import HomeIcon from '@mui/icons-material/Home';

const Company = () => {
    const [isActive1, setIsActive1] = useState(true);
    const [isActive2, setIsActive2] = useState(false);

    return (
        <>
            {/* Navbar */}
            {/* <Navbar1 /> */}
            <div className="flex flex-row">
                <div className="w-2/3">
                    <div>
                        <div className="m-8">
                            <h1 className="text-2xl font-semibold">International Business Machines (IBM)</h1>
                            <h6 className="my-3"> <i class="fa-solid fa-hand-holding-dollar text-3xl"></i> Asset Type : Common Stock</h6>
                        </div>
                    </div>
                    <div className="">
                        <h2 className="mx-8 mt-3 font-semibold text-xl"> <i class="fa-solid fa-circle-info text-2xl"></i> About us</h2>
                        {isActive1 && (
                            <div className="mx-8 mt-3 line h-[216px]">
                                International Business Machines Corporation (IBM) is an American multinational technology company headquartered in Armonk, New York, with operations in over 170 countries. The company began in 1911, founded in Endicott, New York, as the Computing-Tabulating-Recording Company (CTR) and was renamed International Business Machines in 1924.
                                <div>
                                    <button className="ml-[800px] my-3 hover:text-blue-400" onClick={() => {
                                        setIsActive1(!isActive1); setIsActive2(!isActive2);
                                    }}>....Read more</button>
                                </div>
                            </div>
                        )}
                        {isActive2 && (
                            <div className="mx-8 mt-3 line h-[216px]">
                                International Business Machines Corporation (IBM) is an American multinational technology company headquartered in Armonk, New York, with operations in over 170 countries. The company began in 1911, founded in Endicott, New York, as the Computing-Tabulating-Recording Company (CTR) and was renamed International Business Machines in 1924.
                                IBM is incorporated in New York. IBM produces and sells computer hardware, middleware and software, and provides hosting and consulting services in areas ranging from mainframe computers to nanotechnology.IBM is also a major research organization, holding the record for most annual U.S. patents generated by a business (as of 2020) for 28 consecutive years. Inventions by IBM include the automated teller machine (ATM), the floppy disk, the hard disk drive, the magnetic stripe card, the relational database, the SQL programming language, the UPC barcode, and dynamic random-access memory (DRAM). The IBM mainframe, exemplified by the System/360, was the dominant computing platform during the 1960s and 1970s.
                                <div>
                                    <button className="ml-[800px] my-3 hover:text-blue-400" onClick={() => {
                                        setIsActive1(!isActive1); setIsActive2(!isActive2);
                                    }}>....Read less</button>
                                </div>
                            </div>
                        )}
                        <div className="mx-8 mt-2">
                            <h5 className="my-3"> <i class="fa-sharp fa-solid fa-location-dot text-2xl"></i> Address : 1 NEW ORCHARD ROAD, ARMONK, NY, US.</h5>
                            <h5 className="my-3"> <i class="fa-solid fa-industry text-2xl"></i> Industry : Computer & Office Equipment</h5>
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
                                    1.144
                                </div>
                            </div>
                            <div className="mt-3 mx-2 flex justify-between">
                                <div>
                                    PERatio
                                </div>
                                <div>
                                    22.13
                                </div>
                            </div>
                            <div className="my-3 mx-2 flex justify-between">
                                <div>
                                    PriceToSalesRatioTTM
                                </div>
                                <div>
                                    1.996
                                </div>
                            </div>

                            <div className="my-3 mx-2 flex justify-between">
                                <div>
                                    PriceToBookRatio
                                </div>
                                <div>
                                    6.08
                                </div>
                            </div>
                        </div>
                        <div className="w-1/2 bg-slate-300 rounded-xl m-8 p-3">
                            <div className="mt-3 mx-2 flex justify-between">
                                <div>
                                    CIK
                                </div>
                                <div>
                                    51143
                                </div>
                            </div>
                            <div className="mt-3 mx-2 flex justify-between">
                                <div>
                                    Exchange
                                </div>
                                <div>
                                    NYSE
                                </div>
                            </div>
                            <div className="mt-3 mx-2 flex justify-between">
                                <div>
                                    Currency
                                </div>
                                <div>
                                    USD
                                </div>
                            </div>
                            <div className="mt-3 mx-2 flex justify-between">
                                <div>
                                    Sector
                                </div>
                                <div>
                                    Technology
                                </div>
                            </div>

                            <div className="mt-3 mx-2 flex justify-between">
                                <div>
                                    FiscalYearEnd
                                </div>
                                <div>
                                    December
                                </div>
                            </div>
                            <div className="my-3 mx-2 flex justify-between">
                                <div>
                                    LatestQuater
                                </div>
                                <div>
                                    2022-09-30
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-1/3 bg-slate-300 rounded-xl m-8 p-3">
                    <div className="mt-3 mx-8 flex justify-between">
                        <div>
                            MarketCapitalization
                        </div>
                        <div>
                            120797053000
                        </div>
                    </div>
                    <div className="mt-3 mx-8 flex justify-between">
                        <div>
                            EBITDA
                        </div>
                        <div>
                            6114000000
                        </div>
                    </div>
                    <div className="my-3 mx-8 flex justify-between">
                        <div>
                            DividendYield
                        </div>
                        <div>
                            0.0489
                        </div>
                    </div>
                    <div className="my-3 mx-8 flex justify-between">
                        <div>
                            EPS
                        </div>
                        <div>
                            6.09
                        </div>
                    </div>
                    <div className="my-3 mx-8 flex justify-between">
                        <div>
                            RevenuePerShareTTM
                        </div>
                        <div>
                            67.2
                        </div>
                    </div>
                    <div className="my-3 mx-8 flex justify-between">
                        <div>
                            ProfitMargin
                        </div>
                        <div>
                            0.0209
                        </div>
                    </div>
                    <div className="my-3 mx-8 flex justify-between">
                        <div>
                            OperatingMarginTTM
                        </div>
                        <div>
                            0.0176
                        </div>
                    </div>
                    <div className="my-3 mx-8 flex justify-between">
                        <div>
                            ReturnOnAssetsTTM
                        </div>
                        <div>
                            0.0049
                        </div>
                    </div>
                    <div className="my-3 mx-8 flex justify-between">
                        <div>
                            ReturnOnEquityTTM
                        </div>
                        <div>
                            0.0648
                        </div>
                    </div>
                    <div className="my-3 mx-8 flex justify-between">
                        <div>
                            RevanueTTM
                        </div>
                        <div>
                            60532998000
                        </div>
                    </div>
                    <div className="my-3 mx-8 flex justify-between">
                        <div>
                            GrossProfitTTM
                        </div>
                        <div>
                            31486000000
                        </div>
                    </div>
                    <div className="my-3 mx-8 flex justify-between">
                        <div>
                            DilutedEPSTTM
                        </div>
                        <div>
                            6.09
                        </div>
                    </div>
                    <div className="my-3 mx-8 flex justify-between">
                        <div>
                            QuaterlyEarningsGrowthYOY
                        </div>
                        <div>
                            0.041
                        </div>
                    </div>
                    <div className="my-3 mx-8 flex justify-between">
                        <div>
                            QuaterlyRevanueGrowthYOY
                        </div>
                        <div>
                            0.065
                        </div>
                    </div>
                    <div className="my-3 mx-8 flex justify-between">
                        <div>
                            AnalystTargetPrice
                        </div>
                        <div>
                            139.96
                        </div>
                    </div>
                    <div className="my-3 mx-8 flex justify-between">
                        <div>
                            TrainingPE
                        </div>
                        <div>
                            22.13
                        </div>
                    </div>
                    <div className="my-3 mx-8 flex justify-between">
                        <div>
                            ForwardPE
                        </div>
                        <div>
                            13.93
                        </div>
                    </div>

                    <div className="my-3 mx-8 flex justify-between">
                        <div>
                            EVToRevanue
                        </div>
                        <div>
                            3.531
                        </div>
                    </div>

                    <div className="my-3 mx-8 flex justify-between">
                        <div>
                            SharesOutstanding
                        </div>
                        <div>
                            896320000
                        </div>
                    </div>

                    <div className="my-3 mx-8 flex justify-between">
                        <div>
                            DividendDate
                        </div>
                        <div>
                            2022-09-10
                        </div>
                    </div>
                    <div className="my-3 mx-8 flex justify-between">
                        <div>
                            ExDividendDate
                        </div>
                        <div>
                            2022-11-09
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Company;