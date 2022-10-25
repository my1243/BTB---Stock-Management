import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";


const Editprofile = () => {
    return (
        <>
            <div className="w-1/2 flex justify-center">
                <form className="bg-yellow-200">
                    <div className="flex justify-center m-8">
                        <img className="w-1/4 h-1/4 rounded-[50%]" src="avatar.jpg" alt="ggg" />
                    </div>
                    <div className="flex flex-row -mb-8">
                        <div className="m-8">
                            <h2>First name</h2>
                            <input className="bg-red-300 rounded-md h-8"></input>
                        </div>
                        <div className="m-8">
                            <h2>Last name</h2>
                            <input className="bg-red-300 rounded-md h-8"></input>
                        </div>
                    </div>
                    <div className="m-8">
                        <h2>Gender</h2>
                        <input className="bg-red-300 rounded-md h-8"></input>
                    </div>
                    <div className="m-8">
                        <h2>Email</h2>
                        <input className="bg-red-300 rounded-md h-8 w-full"></input>
                    </div>
                    <div className="m-8">
                        <h2>contact no.</h2>
                        <input className="bg-red-300 rounded-md h-8 w-full"></input>
                    </div>
                    <div className="m-8">
                        <h2>password</h2>
                        <input className="bg-red-300 rounded-md h-8 w-full"></input>
                    </div>
                    <div className="m-8">
                        <button className="bg-red-200 px-5 py-3 rounded-md">Save</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Editprofile; 