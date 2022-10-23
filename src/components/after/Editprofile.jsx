import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./pic.jpg";

const Editprofile = () => {
    return (
        <>
            <div>
                <form>
                    <div>
                        <img src="./pic.jpg" />
                    </div>
                    <div className="flex flex-row">
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
                        <h2>Email</h2>
                        <input className="bg-red-300 rounded-md h-8 w-[400px]"></input>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Editprofile; 