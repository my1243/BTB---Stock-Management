import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Favourites from "./Favourites";
import First from "./First";
import Hello from "./Hello";
import Home1 from "./Home1";
import Sidebar from "./Sidebar";
import TradeView from "./TradingView";
import Watchlist from "./WatchList";


const Navbar1 = () => {
  const [companySym, setCompanySym] = useState("");
  const [findsym, setfindsym] = useState("AAPL");

    const [user,setuser] = useState({});
    const callNavbar = async () => {
        try{
            const res = fetch("/portfolio",{
                method:"GET",
                headers:{
                    "Content-Type":"application/json",
                    Accept:"application/json"
                },
                credentials:"include"
            });

            const data = await (await res).json();
            setuser(data);
            console.log(data);

            if(!res.status === 200){
                throw new Error("Data not found");
            }
        }catch(err){
            console.log(err);
            window.location="/";
        }
    } 

    useEffect(() => {
        callNavbar();
    },[]);

  const handleInputs = (event) => {
    event.preventDefault();
    console.log(companySym);
    setfindsym(companySym);
    findsym.length>0 ? 
    // Home1(findsym)
    <Home1 props={findsym}/>
    : <p>Symbol not found</p>
  }

  const [details, setDetails] = useState({});
  useEffect(() => {
    const fetchApi = async () => {
      console.log('m');
      const url = `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${findsym}&apikey=GEUNO2UYHPF6Q8X9`
      const response = await fetch(url);
      const resJson = await response.json();
      setDetails(resJson);
      console.log("yarra")
      details ? 
        <Sidebar data={details} /> 
        : <p>details not found</p>
      console.log(details);
    }
    fetchApi();
  }, [findsym]);

  return (
    <>
    <nav className="col-span-full">
      <div className="flex flex-row justify-between px-4 items-center ">
        <div>
          <Link to="/portfolio"><h1 className="text-2xl font-bold uppercase">Investor's Choice</h1></Link>
        </div>
        <div>
          <form className="" onSubmit={handleInputs}>
            <input type={'search'} value={companySym} onChange={(e) => setCompanySym(e.target.value)} className="bg-gray-50 w-96 px-3 py-2 rounded-lg outline-none" placeholder="&#128269; Search for stock and more..." />
          </form>
        </div>
          <div className="flex flex-row items-center justify-center">
            <div className="h-12 w-12 rounded-full overflow-hidden m-2"><img src="../avatar.jpg" /></div>
            <li className="dropdown mr-8">
            <div className="hover:cursor-pointer">
              <h1 className="font-medium text-md">{user.fname} {user.lname}</h1>
              <h3 className="font-medium text-slate-600 text-sm">{user.email}</h3>
            </div>
            
            {/* drop down items */}

            <div class="dropdown-content">
              <Link to="/portfolio">
                View Profile
              </Link>
              <Link to="/portfolio/edit-profile">
                Edit Profile
              </Link>
              <Link to="/">
                Logout
              </Link>
            </div>
        </li>
        {/* <div className="mx-10">
          <button className="inline-flex items-center text-slate-900 bg-gray-100 border-0 py-1 px-3 focus:outline-none rounded-lg text-base mt-4 md:mt-0 hover:bg-orange-500 hover:text-white transition-colors duration-300 ease-linear"><Link to={"/"}>Log Out</Link></button>
        </div> */}
      </div>
    </div>
    </nav>

        {/* {details ? (
            Sidebar(details),
            Home1(findsym)
        ) 
        : <p>Data not found</p>
        } */}
    {/* {
    details ? (
      <div className="flex flex-row">
        <div className="w-1/5 px-4">
          <Watchlist />
          <Hello />
          <First data={details} />
        </div>
        <div className="w-4/5 px-4 max-h-screen py-[10px] mr-2 bg-gray-200 rounded-lg">
          <Favourites />
          <TradeView comsym={findsym} />
        </div>
      </div>
    ) : (<p>Details not found</p>)
  } */}
      
    </>
  );
};

export default Navbar1;