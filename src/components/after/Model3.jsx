import React from "react";
import { useState } from "react";
import Navbar1 from "./Navbar";

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
        setuser({ ...user, [name]: value })
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
        <Navbar1/>
            <div className="flex flex-row bg-gray-100">
                <div className="w-1/3 m-4 bg-blue-300 rounded-lg h-[87vh] sticky top-20 left-0">
                        <div className="mx-4 my-4">
                            <form action="" onSubmit={handleSubmit}>
                                <div>
                                    <label for="Sharename" class="block text-left text-md font-medium text-neutral-600"> Share name : </label>
                                    <input type="text"
                                        value={user.Sharename}
                                        onChange={handleInput}
                                        name="Sharename" id="Sharename" className="block w-full p-2 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-1 focus:ring-slate-600 mt-1 mb-3" placeholder="Sharename"></input>
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
                                        value={user.DateOfPurchase}
                                        onChange={handleInput}
                                        name="DateOfPurchase" id="DateOfPurchase" className="block w-full p-2 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutr al-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-1 focus:ring-slate-600 mt-1 mb-3" placeholder="dd/mm/yy"></input>
                                </div>
                                <div>
                                    <label htmlFor="Rate" className="block text-left text-md font-medium text-neutral-600">Rate : </label>
                                    <input type="number"
                                        value={user.Rate}
                                        onChange={handleInput}
                                        name="Rate" id="Rate" className="block w-full p-2 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-1 focus:ring-slate-600 mt-1 mb-3" placeholder="Rate"></input>
                                </div>
                                <div>
                                    <label htmlFor="UpperLimit" className="block text-left text-md font-medium text-neutral-600">Upper Limit :</label>
                                    <input type="number"
                                        value={user.UpperLimit}
                                        onChange={handleInput}
                                        name="UpperLimit" id="UpperLimit" className="block w-full p-2 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-1 focus:ring-slate-600 mt-1 mb-3" placeholder="UpperLimit"></input>
                                </div>
                                <div>
                                    <label htmlFor="LowerLimit" className="block text-left text-md font-medium text-neutral-600">Lower Limit :</label>
                                    <input type="number"
                                        value={user.LowerLimit}
                                        onChange={handleInput}
                                        name="LowerLimit" id="LowerLimit" className="block w-full p-2 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-1 focus:ring-slate-600 mt-1 mb-3" placeholder="LowerLimit"></input>
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
                        record.map((curr) => {
                            const { id, Sharename, quantity, DateOfPurchase, Rate } = curr;
                            return (
                                <div className="my-4 bg-slate-300  border-2 border-slate-600 rounded-xl overflow-hidden">
                                    <div className="sm:mx-20 mx-10 flex flex-row">
                                        <div key={curr.id} className="my-4 mx-2">
                                            <div>
                                                <label htmlFor="Sharename" className="block text-left text-md font-medium text-neutral-600">Share name</label>
                                            </div>
                                            <div className="text-center mt-1">
                                                {curr.Sharename}
                                            </div>

                                        </div>
                                        <div key={curr.id} className="my-4 mx-5">
                                            <div>
                                                <label htmlFor="quantity" className="block text-left text-md font-medium text-neutral-600">quantity
                                                </label>
                                            </div>
                                            <div className="text-center mt-1">
                                                {curr.quantity}
                                            </div>

                                        </div>
                                        <div key={curr.id} className="my-4 mx-5">
                                            <div>
                                                <label htmlFor="DateOfPurchase" className="block text-left text-md font-medium text-neutral-600">Date of purchase</label>
                                            </div>
                                            <div className="text-center mt-1">
                                                {curr.DateOfPurchase}
                                            </div>
                                        </div>
                                        <div key={curr.id} className="my-4 mx-5">
                                            <div>
                                                <label htmlFor="Rate" className="block text-left text-md font-medium text-neutral-600">Rate </label>
                                            </div>
                                            <div className="text-center mt-1">
                                                {curr.Rate}
                                            </div>

                                        </div>

                                        <div key={curr.id} className="my-4 mx-5">
                                            <div>
                                                <label htmlFor="UpperLimit" className="block text-left text-md font-medium text-neutral-600">UpperLimit</label>
                                            </div>
                                            <div className="text-center mt-1">
                                                {curr.UpperLimit}
                                            </div>

                                        </div>

                                        <div key={curr.id} className="my-4 mx-5">
                                            <div>
                                                <label htmlFor="LowerLimit" className="block text-left text-md font-medium text-neutral-600">LowerLimit </label>
                                            </div>
                                            <div className="text-center mt-1">
                                                {curr.LowerLimit}
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


