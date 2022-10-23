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
                    <div  className="flex flex-col">
                        <div>
                            <h2>First name</h2>
                            <input className="bg-red-300 rounded-md h-8"></input>
                        </div>
                        <div>
                            <h2>Last name</h2>
                            <input className="bg-red-300 rounded-md h-8"></input>
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default Editprofile; 