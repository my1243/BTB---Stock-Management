import React from "react";
import { useState } from "react";

const Model3 = () => {

    const [user, setuser] = useState({
        Sharename: "",
        quantity: "",
        DateOfPurchase: "",
        Rate: "",
        UpperLimit: "",
        LowerLimit: ""
    });

    const handleInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setuser({...user, [name]: value })
    }

    const [record, setrecord] = useState([]);

    const handleSubmit = (e) => {
        console.log("submitted");
        e.preventDefault();
        const newrecord = { ...user, id: new Date().getTime().toString() }
        //console.log(record);
        setrecord([...record, newrecord]);
        //console.log(record);
        setuser({ Sharename: "", quantity: "", DateOfPurchase: "", Rate: "", UpperLimit: "", LowerLimit: "" });
    }
    const [isActive2, setIsActive2] = useState(false);

    return (
        <>
            <div className="flex flex-row">  
                <div className="w-1/2">
                    <div>
                        <button onClick={() => { setIsActive2(!isActive2) }} >open</button>
                    </div>
                    {isActive2 && (
                        <div className="mx-16">
                            <form action="" onSubmit={handleSubmit}>
                                <div>
                                    <label for="Sharename" class="block text-left text-sm font-medium text-neutral-600"> Share name : </label>
                                    <input type="text"
                                        value={user.Sharename}
                                        onChange={handleInput}
                                        name="Sharename" id="Sharename" className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 mt-3 mb-5" placeholder="Sharename"></input>
                                </div>
                                <div>
                                    <label htmlFor="quantity" className="block text-left text-sm font-medium text-neutral-600">quantity : </label>
                                    <input type="nu"
                                        value={user.quantity}
                                        onChange={handleInput}
                                        name="quantity" id="quantity" className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 mt-3 mb-5" placeholder="quantity"></input>
                                </div>
                                <div>
                                    <label htmlFor="DateOfPurchase" className="block text-left text-sm font-medium text-neutral-600">Date Of Purchase :</label>
                                    <input type="text"
                                        value={user.DateOfPurchase}
                                        onChange={handleInput}
                                        name="DateOfPurchase" id="DateOfPurchase" className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutr al-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 mt-3 mb-5" placeholder="dd/mm/yy"></input>
                                </div>
                                <div>
                                    <label htmlFor="Rate" className="block text-left text-sm font-medium text-neutral-600">Rate : </label>
                                    <input type="number"
                                        value={user.Rate}
                                        onChange={handleInput}
                                        name="Rate" id="Rate" className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 mt-3 mb-5" placeholder="Rate"></input>
                                </div>
                                <div>
                                    <label htmlFor="UpperLimit" className="block text-left text-sm font-medium text-neutral-600">Upper Limit :</label>
                                    <input type="number"
                                        value={user.UpperLimit}
                                        onChange={handleInput}
                                        name="UpperLimit" id="UpperLimit" className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 mt-3 mb-5" placeholder="UpperLimit"></input>
                                </div>
                                <div>
                                    <label htmlFor="LowerLimit" className="block text-left text-sm font-medium text-neutral-600">Lower Limit :</label>
                                    <input type="number"
                                        value={user.LowerLimit}
                                        onChange={handleInput}
                                        name="LowerLimit" id="LowerLimit" className="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300 mt-3 mb-5" placeholder="LowerLimit"></input>
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="my-8 rounded-md hover:bg-green-300 px-5 py-3 text-xl"  >
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    )
                    }
                </div>
                <div className="ml-20">
                    {
                        record.map((curr) => {
                            const { id, Sharename, quantity, DateOfPurchase, Rate } = curr;
                            return (

                                <div className="mb-16 mt-16 border-x-0 border-t-0 w-[32rem] ml-10 border-red-600 border-4">
                                    <div className="sm:mx-20 mx-10 ">
                                        <div key={curr.id} className="my-10">
                                            <label htmlFor="Sharename" className="block text-left text-md font-medium text-neutral-600">Share name : &nbsp;&nbsp;&nbsp;&nbsp; {curr.Sharename}</label>

                                        </div>
                                        <div key={curr.id} className="my-10">
                                            <label htmlFor="quantity" className="block text-left text-md font-medium text-neutral-600">quantity : &nbsp;&nbsp;&nbsp;&nbsp;{curr.quantity} </label>

                                        </div>
                                        <div key={curr.id} className="my-10">
                                            <label htmlFor="DateOfPurchase" className="block text-left text-md font-medium text-neutral-600">Date of purchase : &nbsp;&nbsp;&nbsp;&nbsp;{curr.DateOfPurchase} </label>

                                        </div>
                                        <div key={curr.id} className="my-10">
                                            <label htmlFor="Rate" className="block text-left text-md font-medium text-neutral-600">Rate : &nbsp;&nbsp;&nbsp;&nbsp;{curr.Rate}</label>

                                        </div>

                                        <div key={curr.id} className="my-10">
                                            <label htmlFor="UpperLimit" className="block text-left text-md font-medium text-neutral-600">UpperLimit : &nbsp;&nbsp;&nbsp;&nbsp;{curr.UpperLimit}</label>

                                        </div>

                                        <div key={curr.id} className="my-10">
                                            <label htmlFor="LowerLimit" className="block text-left text-md font-medium text-neutral-600">LowerLimit : &nbsp;&nbsp;&nbsp;&nbsp;{curr.LowerLimit}</label>

                                        </div>
                                    </div>

                                    {/* <div key={curr.id}>
                                    <p>{curr.Sharename}</p>
                                    <p>{curr.quantity}</p>
                                    <p>{curr.DateOfPurchase}</p>
                                    <p>{curr.Rate}</p>
                                    <p>{curr.UpperLimit}</p>
                                    <p>{curr.LowerLimit}</p>
                                </div> */}
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


