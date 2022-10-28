import React, { useState, useEffect } from "react";
import { useAlert } from "react-alert";
import { Link } from "react-router-dom";
import Editprofile from "./Editprofile";

const Viewprofile = (props) => {

    const [userdata, setuserdata] = useState(props.user);

    return (
        <>
            <h1 className="text-xl font-bold tracking-wide border-l ml-4 pl-6 mt-4">View Profile</h1>
            <form method="GET" className="flex items-center ml-4 mr-2 border-l">
                <div className="w-1/2">
                    <div className="flex justify-center mx-4 my-4">
                        <img className="w-32 h-32 rounded-full" src="../avatar.jpg" alt="ggg" />
                    </div>

                    <div className="mx-6 my-4 flex justify-between">
                        <div>
                            <label for="fname" className="leading-7 text-sm text-gray-600">First name  </label>
                        </div>
                        <div>
                            <h2 className="px-2 leading-8 transition-colors duration-200 ease-in-out "> {userdata.fname} </h2>
                        </div>
                    </div>
                    <div className="mx-6 my-4 flex justify-between">
                        <div>
                            <label for="lname" className="leading-7 text-sm text-gray-600">Last name  </label>
                        </div>
                        <div>
                            <h2 className="px-2 leading-8 transition-colors duration-200 ease-in-out "> {userdata.lname}</h2>
                        </div>
                    </div>

                    <div className="mx-6 my-4 flex justify-between">
                        <div>
                            <label for="gender" className="leading-7 text-sm text-gray-600">Gender</label>
                        </div>
                        <div>
                            <h2 className="px-2 leading-8 transition-colors duration-200 ease-in-out ">{userdata.gender}</h2>
                        </div>
                    </div>
                    <div className="mx-6 my-4 flex justify-between">
                        <div>
                            <label for="email" className="leading-7 text-sm text-gray-600">Email</label>
                        </div>
                        <div>
                            <h2 className="px-2 leading-8 transition-colors duration-200 ease-in-out ">{userdata.email}</h2>
                        </div>
                    </div>
                    <div className="mx-6 my-4 flex justify-between">
                        <div>
                            <label for="phone" className="leading-7 text-sm text-gray-600">contact no.</label>
                        </div>
                        <div>
                            <h2 className="px-2 leading-8 transition-colors duration-200 ease-in-out ">{userdata.phone}</h2>
                        </div>
                    </div>

                    {/* <div className="mx-6 my-4 flex justify-between">
                        <div>
                            <label for="password" className="leading-7 text-sm text-gray-600">password</label>
                        </div>
                        <div>
                            <h2 className="leading-7 text-sm text-gray-600 ">{userdata.password}</h2>
                        </div>
                    </div> */}


                    {/* <div className="mx-6 my-4">
                        <button className="bg-blue-200 hover:bg-blue-400 hover:font-medium px-10 py-2 rounded-md">Save</button>
                    </div> */}
                </div>
                <div className="w-1/2">
                    <img className="rounded-lg" src="../view.jpg" alt="edit" />
                </div>
            </form>
        </>
    )
}

export default Viewprofile;