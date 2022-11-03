import React, { useState, useEffect } from "react";
import { useAlert } from "react-alert";
import { Link } from "react-router-dom";

const Navbar1 = (props) => {
  const [companySym, setCompanySym] = useState("");

  const [user, setuser] = useState({
    fname: "",
    lname: "",
    email: ""
  });

  const alert = useAlert();
  const logoutfn = async () => {
    try{
        const res = await fetch("/logout", {
            method:"GET",
            headers:{
                "Content-Type":"application/json",
                Accept:"application/json"
            },
            credentials:"include"
        })
        if(res.status === 200){
            alert.success("Logout");
            window.location="/";
        }else{
            alert.error("logout failed");
        }
    }catch(err){
        console.log(err);
    }
  }

  const callNavbar = async () => {
    try {
      const res = await fetch("/portfolio", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        credentials: "include",
      });

      const data = await res.json();
      props.setuser(data);
      setuser({
        fname: data.fname,
        lname: data.lname,
        email: data.email
      })
      console.log(data);

      if (!res.status === 200) {
        throw new Error("Data not found");
      }
    } catch (err) {
      console.log(err);
      window.location = "/";
    }
  };

  useEffect(() => {
    callNavbar();
  }, []);

  const handleInputs = (event) => {
    event.preventDefault();
    console.log(companySym);
    props.setsys(companySym);
  };

  return (
    <>
      <nav className="col-span-full">
        <div className="flex flex-row justify-between px-4 items-center ">
          <div>
            <Link to="/portfolio">
              <h1 className="text-2xl font-bold uppercase">
                Investor's Choice
              </h1>
            </Link>
          </div>
          <div>
            <form className="" onSubmit={handleInputs}>
              <input
                type={"search"}
                value={companySym}
                onChange={(e) => setCompanySym(e.target.value)}
                className="bg-gray-50 w-96 px-3 py-2 rounded-lg outline-none"
                placeholder="&#128269; Search for stock and more..."
              />
            </form>
          </div>
          <div className="flex flex-row items-center justify-center">
            <div className="h-12 w-12 rounded-full overflow-hidden m-2">
              <img src="../avatar.jpg" />
            </div>
            <li className="dropdown mr-8">
              <div className="hover:cursor-pointer">
                <h1 className="font-medium text-md">
                  {user.fname} {user.lname}
                </h1>
                <h3 className="font-medium text-slate-600 text-sm">
                  {user.email}
                </h3>
              </div>

              {/* drop down items */}

              <div class="dropdown-content">
                <Link to="/portfolio/view-profile">View Profile</Link>
                <Link to="/portfolio/edit-profile">Edit Profile</Link>
                <Link onClick={logoutfn} to="/">Logout</Link>
              </div>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar1;
