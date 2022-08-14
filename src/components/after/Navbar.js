import React from "react";
import { Link } from "react-router-dom";

const Navbar1 = () => {
    return (
        
            <div className="flex flex-row justify-between px-4 items-center sticky top-0 bg-white">
                <div>
                    <Link to="/portfolio"><h1 className="text-2xl font-bold uppercase">Portfolio</h1></Link>
                </div>
                <div className="flex flex-row items-center justify-center">
                    <div className="h-12 w-12 rounded-full overflow-hidden m-2"><img src="../avatar.jpg" /></div>
                    <div>
                        <h1 className="font-medium text-md">Barly Vallendito</h1>
                        <h3 className="font-medium text-slate-600 text-sm">barleyvallen@gmail.com</h3>

                    </div>
                </div>
            </div>
            
        
    )
}

export default Navbar1;