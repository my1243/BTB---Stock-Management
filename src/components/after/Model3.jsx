import React from "react";
import { useState } from "react";
import { useAlert } from "react-alert";
import Navbar1 from "./Navbar";

const Model3 = () => {

    const [user, setuser] = useState({
        sharename: "",
        quantity: "",
        DOP: "",
        rate: "",
        upperLimit: "",
        lowerLimit: ""
    });

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setuser({ ...user, [name]: value })
    }

    const alert = useAlert();
    const [record, setrecord] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {sharename,quantity,DOP,rate,upperLimit,lowerLimit} = user;
        const email = "mihiryarra@gmail.com";
        const res = await fetch("/stocks", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email, sharename,quantity,DOP,rate,upperLimit,lowerLimit
            })
        })
        const data = await res.json();
        if(res.status(200)){
            alert.success("Stock data added.");
        }else{
            alert.error("Push failed");
        }
    }
    const [isActive2, setIsActive2] = useState(false);

    // const [item, setitem] = useState([]);
    // const [input, setinput] = useState('');
    // const additem = () => {
    //     if (!input) { }
    //     else {
    //         setitem([...item, input]);
    //         setinput('');
    //     }
    // }
    // const del = (id) => {
    //     const upitem = item.filter((elem, ind) => {
    //         return ind !== id;
    //     });
    //     setitem(upitem);
    // }


    return (
        <>
            <div className="flex flex-row max-h-[89vh] mr-2 rounded-lg bg-gray-100">
                <div className="w-1/3 m-4 bg-blue-300 rounded-lg sticky top-20 left-0">
                        <div className="mx-4 my-4">
                            <form method="POST" onSubmit={handleSubmit}>
                                <div>
                                    <label for="sharename" class="block text-left text-md font-medium text-neutral-600"> Share name : </label>
                                    <input type="text"
                                        value={user.sharename}
                                        onChange={handleInput}
                                        name="sharename" id="sharename" className="block w-full p-2 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-1 focus:ring-slate-600 mt-1 mb-3" placeholder="sharename"></input>
                                </div>
                                <div>
                                    <label htmlFor="quantity" className="block text-left text-md font-medium text-neutral-600">quantity : </label>
                                    <input type="number"
                                        value={user.quantity}
                                        onChange={handleInput}
                                        name="quantity" id="quantity" className="block w-full p-2 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-1 focus:ring-slate-600 mt-1 mb-3" placeholder="quantity"></input>
                                </div>
                                <div>
                                    <label htmlFor="DateOfPurchase" className="block text-left text-md font-medium text-neutral-600">Date Of Purchase :</label>
                                    <input type="text"
                                        value={user.DOP}
                                        onChange={handleInput}
                                        name="DOP" id="DOP" className="block w-full p-2 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutr al-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-1 focus:ring-slate-600 mt-1 mb-3" placeholder="dd/mm/yy"></input>
                                </div>
                                <div>
                                    <label htmlFor="rate" className="block text-left text-md font-medium text-neutral-600">rate : </label>
                                    <input type="number"
                                        value={user.rate}
                                        onChange={handleInput}
                                        name="rate" id="rate" className="block w-full p-2 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-1 focus:ring-slate-600 mt-1 mb-3" placeholder="rate"></input>
                                </div>
                                <div>
                                    <label htmlFor="upperLimit" className="block text-left text-md font-medium text-neutral-600">Upper Limit :</label>
                                    <input type="number"
                                        value={user.upperLimit}
                                        onChange={handleInput}
                                        name="upperLimit" id="upperLimit" className="block w-full p-2 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-1 focus:ring-slate-600 mt-1 mb-3" placeholder="upperLimit"></input>
                                </div>
                                <div>
                                    <label htmlFor="lowerLimit" className="block text-left text-md font-medium text-neutral-600">Lower Limit :</label>
                                    <input type="number"
                                        value={user.lowerLimit}
                                        onChange={handleInput}
                                        name="lowerLimit" id="lowerLimit" className="block w-full p-2 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-1 focus:ring-slate-600 mt-1 mb-3" placeholder="lowerLimit"></input>
                                </div>
                                <div className="text-center" >
                                    <button type="submit" className="my-8 rounded-md hover:bg-blue-700 hover:text-black bg-black text-white py-3 w-full text-xl"  >
                                        ADD!
                                    </button>
                                </div>
                            </form>
                        </div>
                </div>







                <div className="mx-4 w-2/3">
                    {
                        record.map((curr,idx) => {
                            const { sharename, quantity, DateOfPurchase, rate, upperLimit, lowerLimit } = curr;
                            return (
                                <div className="my-4 bg-slate-300  border-2 border-slate-600 rounded-xl overflow-hidden">
                                    <div className="sm:mx-20 mx-10 flex flex-row">
                                        <div key={idx} className="my-4 mx-2">
                                            <div>
                                                <label htmlFor="sharename" className="block text-left text-md font-medium text-neutral-600">Share name</label>
                                            </div>
                                            <div className="text-center mt-1">
                                                {sharename}
                                            </div>

                                        </div>
                                        <div key={idx} className="my-4 mx-5">
                                            <div>
                                                <label htmlFor="quantity" className="block text-left text-md font-medium text-neutral-600">quantity
                                                </label>
                                            </div>
                                            <div className="text-center mt-1">
                                                {quantity}
                                            </div>

                                        </div>
                                        <div key={idx} className="my-4 mx-5">
                                            <div>
                                                <label htmlFor="DateOfPurchase" className="block text-left text-md font-medium text-neutral-600">Date of purchase</label>
                                            </div>
                                            <div className="text-center mt-1">
                                                {DateOfPurchase}
                                            </div>
                                        </div>
                                        <div key={idx} className="my-4 mx-5">
                                            <div>
                                                <label htmlFor="rate" className="block text-left text-md font-medium text-neutral-600">rate </label>
                                            </div>
                                            <div className="text-center mt-1">
                                                {rate}
                                            </div>

                                        </div>

                                        <div key={idx} className="my-4 mx-5">
                                            <div>
                                                <label htmlFor="upperLimit" className="block text-left text-md font-medium text-neutral-600">upperLimit</label>
                                            </div>
                                            <div className="text-center mt-1">
                                                {upperLimit}
                                            </div>

                                        </div>

                                        <div key={idx} className="my-4 mx-5">
                                            <div>
                                                <label htmlFor="lowerLimit" className="block text-left text-md font-medium text-neutral-600">lowerLimit </label>
                                            </div>
                                            <div className="text-center mt-1">
                                                {lowerLimit}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Model3;


