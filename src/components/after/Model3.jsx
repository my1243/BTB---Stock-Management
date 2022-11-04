import React, { useEffect } from "react";
import { useState } from "react";
import { useAlert } from "react-alert";
import Navbar1 from "./Navbar";

const Model3 = (props) => {
  const [user, setuser] = useState({
    sharename: "",
    quantity: "",
    DOP: "",
    rate: "",
    upperLimit: "",
    lowerLimit: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setuser({ ...user, [name]: value });
  };

  const alert = useAlert();
  const [record, setrecord] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { sharename, quantity, DOP, rate, upperLimit, lowerLimit } = user;
    // sharename = sharename.trim().toLowerCase();
    const email = props.useremail;
    const res = await fetch("/stocks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        sharename,
        quantity,
        DOP,
        rate,
        upperLimit,
        lowerLimit,
      }),
    });
    const data = await res.json();
    if (res.status === 200) {
      alert.success("Stock data added.");
      setrecord((e) => [...e, user]);
      setuser({
        sharename: "",
        quantity: "",
        DOP: "",
        rate: "",
        upperLimit: "",
        lowerLimit: "",
      });
    } else {
      alert.error("Push failed");
    }
  };

  const handleDel = async (idx) => {
    console.log("hello");
    const email = props.useremail;
    const {sharename, quantity, DOP, rate, upperLimit, lowerLimit } = record[idx];
    const res = await fetch("/destocks", {
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            email, sharename, quantity, DOP, rate, upperLimit, lowerLimit
        })
    })

    if(res.status === 200){
        record.splice(idx,1);
        setrecord(() => [...record]);
        alert.success("Stock Removed");
    }else{
        alert.error("Deletion Failed");
    }
    // console.log(record);
  }

  const callStocks = async () => {
    const email = props.useremail;
    try {
      const res = await fetch("/sstocks", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email
        }),
      });
      const data = await res.json();
      if (res.status === 200 || data) {
        console.log(data.message);
        setrecord(data.message);
        console.log(record);
      } else {
        console.log("data not found");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callStocks();
  }, [props.useremail]);

  return (
    <>
    { props.useremail.length > 0 ?
    <>
      <div className="flex flex-row max-h-[89vh] mr-2 rounded-lg bg-gray-100">
        <div className="w-1/3 m-4 rounded-lg">
          <div className="mx-4 my-4">
            <form method="POST" onSubmit={handleSubmit}>
              <div>
                <label
                  for="sharename"
                  class="block text-left text-md font-medium text-slate-900"
                >
                  Share name :
                </label>
                <input
                  type="text"
                  value={user.sharename}
                  onChange={handleInput}
                  name="sharename"
                  id="sharename"
                  className="block w-full p-2 text-base placeholder-slate-600 transition duration-500 ease-in-out transform border border-gray-700 rounded-lg text-slate-900 bg-white focus:outline-none focus:border-transparent focus:ring-1 focus:ring-slate-600 mt-1 mb-3"
                  placeholder="sharename"
                ></input>
              </div>
              <div>
                <label
                  htmlFor="quantity"
                  className="block text-left text-md font-medium text-slate-900"
                >
                  quantity :
                </label>
                <input
                  type="number"
                  value={user.quantity}
                  onChange={handleInput}
                  name="quantity"
                  id="quantity"
                  className="block w-full p-2 text-base placeholder-slate-600 transition duration-500 ease-in-out transform border border-gray-700 rounded-lg text-slate-900 bg-white focus:outline-none focus:border-transparent focus:ring-1 focus:ring-slate-600 mt-1 mb-3"
                  placeholder="quantity"
                ></input>
              </div>
              <div>
                <label
                  htmlFor="DateOfPurchase"
                  className="block text-left text-md font-medium text-slate-900"
                >
                  Date Of Purchase :
                </label>
                <input
                  type="text"
                  value={user.DOP}
                  onChange={handleInput}
                  name="DOP"
                  id="DOP"
                  className="block w-full p-2 text-slate-900 placeholder-slate-600 transition duration-500 ease-in-out transform border border-gray-700 rounded-lg bg-white focus:outline-none focus:border-transparent focus:ring-1 focus:ring-slate-600 mt-1 mb-3"
                  placeholder="dd/mm/yy"
                ></input>
              </div>
              <div>
                <label
                  htmlFor="rate"
                  className="block text-left text-md font-medium text-slate-900"
                >
                  rate :{" "}
                </label>
                <input
                  type="number"
                  value={user.rate}
                  onChange={handleInput}
                  name="rate"
                  id="rate"
                  className="block w-full p-2 text-base placeholder-slate-600 transition duration-500 ease-in-out transform border border-gray-700 rounded-lg text-slate-900 bg-white focus:outline-none focus:border-transparent focus:ring-1 focus:ring-slate-600 mt-1 mb-3"
                  placeholder="rate"
                ></input>
              </div>
              <div>
                <label
                  htmlFor="upperLimit"
                  className="block text-left text-md font-medium text-slate-900"
                >
                  Upper Limit :
                </label>
                <input
                  type="number"
                  value={user.upperLimit}
                  onChange={handleInput}
                  name="upperLimit"
                  id="upperLimit"
                  className="block w-full p-2 text-base placeholder-slate-600 transition duration-500 ease-in-out transform border border-gray-700 rounded-lg text-slate-900 bg-white focus:outline-none focus:border-transparent focus:ring-1 focus:ring-slate-600 mt-1 mb-3"
                  placeholder="upperLimit"
                ></input>
              </div>
              <div>
                <label
                  htmlFor="lowerLimit"
                  className="block text-left text-md font-medium text-slate-900"
                >
                  Lower Limit :
                </label>
                <input
                  type="number"
                  value={user.lowerLimit}
                  onChange={handleInput}
                  name="lowerLimit"
                  id="lowerLimit"
                  className="block w-full p-2 text-base placeholder-slate-600 transition duration-500 ease-in-out transform border border-gray-700 rounded-lg text-slate-900 bg-white focus:outline-none focus:border-transparent focus:ring-1 focus:ring-slate-600 mt-1 mb-3"
                  placeholder="lowerLimit"
                ></input>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="my-8 rounded-md hover:bg-blue-700 hover:text-white bg-sky-200 text-black py-3 w-full text-xl"
                >
                  ADD!
                </button>
              </div>
            </form>
          </div>
        </div>
        <table className="w-2/3 my-4 mr-4 rounded-md overflow-hidden table-auto">
          <thead>
            <tr className="bg-black text-white font-semibold h-12">
              <th>Sr No.</th>
              <th>Share Name</th>
              <th>Quantity</th>
              <th>Date Of Purchase</th>
              <th>Rate</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {record.length > 0 ? (
              record.map((val, idx) => {
                return (
                  <>
                    <tr className="text-center odd:bg-white text-slate-600 even:bg-slate-100 border border-slate-600 hover:font-semibold cursor-pointer">
                      <td>{idx + 1}</td>
                      <td className="uppercase">{val.sharename}</td>
                      <td>{val.quantity}</td>
                      <td>{val.DOP}</td>
                      <td>{val.rate}</td>
                      <td><i onClick={() => handleDel(idx)} class="fa-solid fa-trash hover:text-red-500"></i></td>
                    </tr>
                  </>
                );
              })
            ) : (
              <tr>no data available. Add some stocks.</tr>
            )}
            <tr><td colSpan={6} className="h-1 bg-black"></td></tr>
          </tbody>
        </table>
      </div> 
      </>:
      <p>loading...</p>
    }

    </>
  );
};

export default Model3;
