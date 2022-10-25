import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Editprofile = () => {
    return (
        <>
            <h1 className="text-xl font-bold tracking-wide border-l ml-4 pl-6 mt-4">Edit Profile</h1>
                <form className="flex items-center ml-4 mr-2 border-l">
                <div className="w-1/2">
                    <div className="flex justify-center mx-4 my-4">
                        <img className="w-32 h-32 rounded-full" src="../avatar.jpg" alt="ggg" />
                    </div>
                    <div className="flex flex-row -mb-8">
                        <div className="mx-6 my-4">
                            <label for="fname" className="leading-7 text-sm text-gray-600">First name</label>
                            <input className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 px-2 leading-8 transition-colors duration-200 ease-in-out"></input>
                        </div>
                        <div className="mx-6 my-4">
                            <label for="lname" className="leading-7 text-sm text-gray-600">Last name</label>
                            <input className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 px-2 leading-8 transition-colors duration-200 ease-in-out"></input>
                        </div>
                    </div>
                    <div className="mx-6 my-4">
                        <label for="gender" className="leading-7 text-sm text-gray-600">Gender</label>
                        <input className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 px-2 leading-8 transition-colors duration-200 ease-in-out"></input>
                    </div>
                    <div className="mx-6 my-4">
                        <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                        <input className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 px-2 leading-8 transition-colors duration-200 ease-in-out"></input>
                    </div>
                    <div className="mx-6 my-4">
                        <label for="phone" className="leading-7 text-sm text-gray-600">contact no.</label>
                        <input className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 px-2 leading-8 transition-colors duration-200 ease-in-out"></input>
                    </div>
                    <div className="mx-6 my-4">
                        <label for="password" className="leading-7 text-sm text-gray-600">password</label>
                        <input className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 px-2 leading-8 transition-colors duration-200 ease-in-out"></input>
                    </div>
                    <div className="mx-6 my-4">
                        <button className="bg-blue-200 hover:bg-blue-400 hover:font-medium px-10 py-2 rounded-md">Save</button>
                    </div>
                    </div>
                    <div className="w-1/2">
                        <img className="rounded-lg" src="../edit.png" alt="edit" />
                    </div>
                </form>
        </>
    )
}

export default Editprofile; 