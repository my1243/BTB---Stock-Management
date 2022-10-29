import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAlert } from "react-alert";

export default function Navbar() {
  let Links = [
    { name: "Home", link: "/Home1" },
    { name: "About Us", link: "/about-us" },
    { name: "Catalog", link: "/catalog" },
  ];

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const alert = useAlert();
  
  const loginUser = async (ev) => {
    ev.preventDefault();
    const respon = await fetch('/login', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    });
    const data = respon.json();
    if (respon.status === 400 || respon.status === 400 || !data) {
        alert.error("Invalid Details");
    } else {
        alert.success("Login successful");
        setTimeout(2000);
      window.location = "/portfolio";
    }
  }

  const [user, setuser] = useState({
    fname: "", lname: "", email: "", phone: "", gender: "", password: "",
    confimedpassword: ""
});
let name, value;
const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setuser({ ...user, [name]: value });
}

const postdata = async (ev) => {
    ev.preventDefault();
    console.log(ev);
    const password = ev.password;
    const cpassword = ev.confimedpassword;
    if (password === cpassword) {
        const { fname, lname, email, phone, gender, password, confimedpassword } = user;
        const response = await fetch("/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                fname, lname, email, phone, gender, password, confimedpassword
            })
        });
        const data = await response.json();
        if (response.status === 422 || !data) {
            alert.error("Invalid Data")
            console.log("Invalid data");
        } else {
            alert.success("User Created.")
            console.log("data stored successfully");
            setIsActive2(!isActive2);
            setIsActive1(!isActive1);
        }
    }
}

  const [isActive1,setIsActive1] = useState(false);
  const [isActive2,setIsActive2] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const location = useLocation();
  return (
    <>
          {isActive1 && (
        <div
          class="overflow-y-auto fixed top-16 left-16 right-16 bottom-0 z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div class="flex items-end justify-center min- px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div
              class="transition-opacity bg-gray-500 bg-opacity-75"
              aria-hidden="true"
            ></div>

            <span
              class="hidden sm:inline-block sm:align-middle sm:"
              aria-hidden="true"
            >

            </span>

            {/* modal content */}

            <section>
    <div class="flex justify-center">
        <div class="flex flex-col bg-white justify-center rounded-xl shadow-2xl flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-12">
            <div class="w-full max-w-xl mx-auto lg:w-96">
            <h2 class="mt-6 text-3xl font-extrabold text-neutral-600">Sign in.</h2>
                <div class="mt-8">
                    <div class="mt-6">
                        <form method="POST" class="space-y-6">
                            <div>
                                <label for="email" class="block text-left text-sm font-medium text-neutral-600"> Email address </label>
                                <div class="mt-1">
                                    <input id="email" name="email" type="email" value={email} onChange={(e) => setemail(e.target.value)} autocomplete="email" required="" placeholder="Your Email" class="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"/>
                                </div>
                            </div>

                            <div class="space-y-1">
                                <label for="password" class="block text-left text-sm font-medium text-neutral-600"> Password </label>
                                <div class="mt-1">
                                    <input id="password" name="password" value={password} type="password" onChange={(e) => setpassword(e.target.value)} autocomplete="current-password" required="" placeholder="Your Password" class="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"/>
                                </div>
                            </div>

                            <div class="flex items-center justify-between">
                                <div class="flex items-center">
                                    <input id="remember-me" name="remember-me" type="checkbox" placeholder="Your password" class="w-4 h-4 text-blue-600 border-gray-200 rounded focus:ring-blue-500"/>
                                    <label for="remember-me" class="block ml-2 text-sm text-neutral-600"> Remember me </label>
                                </div>

                                <div class="text-sm">
                                    <Link to={'/forgot-password'} class="font-medium text-blue-600 hover:text-blue-500"> Forgot your password? </Link>
                                </div>
                            </div>

                            <div>
                                <button type="submit" onClick={loginUser} class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Sign in</button>
                            </div>
                        </form>
                        <div class="relative my-4">
                            <div class="absolute inset-0 flex items-center">
                                <div class="w-full border-t border-gray-300"></div>
                            </div>
                            <div class="relative flex justify-center text-sm">
                                <span class="px-2 bg-white text-neutral-600"> Create an account to join us </span>
                            </div>
                        </div>
                        <div>
                            <button onClick={()=>{setIsActive1(!isActive1); setIsActive2(!isActive2)} } class="w-full items-center block px-10 py-3.5 text-base font-medium text-center text-blue-600 transition duration-500 ease-in-out transform border-2 border-white shadow-md rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                Sign Up
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

          </div>
        </div>
      )}

      {isActive2 && (
        <div
          class="overflow-y-auto fixed inset-10 bottom-0 z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div class="flex items-end justify-center min- px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <div
              class="transition-opacity bg-gray-500 bg-opacity-75"
              aria-hidden="true"
            ></div>

            <span
              class="hidden sm:inline-block sm:align-middle sm:"
              aria-hidden="true"
            >

            </span>

            {/* modal content */}

            <section>
    <div class="flex justify-center">
        <div class="flex flex-col bg-white justify-center rounded-xl shadow-2xl flex-1 px-4 py-6 sm:px-6 lg:flex-none lg:px-12">
            <div class="w-full max-w-xl mx-auto lg:w-96">
            <h2 class="text-3xl font-extrabold text-neutral-600">Create Your Account.</h2>
                <div class="">
                    <div class="mt-6">
                        <form method="POST" class="space-y-4">
                        <div class="grid grid-cols-1 gap-2 lg:grid-cols-2">
                            <div>
                                <label for="fname" class="block text-left text-sm font-medium text-neutral-600"> First Name </label>
                                <div class="mt-1">
                                    <input id="fname" name="fname" type="text" required="" value={user.fname} onChange={handleInputs} placeholder="First Name" class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"/>
                                </div>
                            </div>
                            <div class="space-y-1">
                                <label for="lname" class="block text-left text-sm font-medium text-neutral-600"> Last Name </label>
                                <div class="mt-1">
                                    <input id="lname" name="lname" type="text" required="" value={user.lname} onChange={handleInputs} placeholder="Last Name" class="block w-full px-5 py-3 text-base text-neutral-600 placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"/>
                                </div>
                            </div>
                        </div>
                            <div>
                                <label for="email" class="block text-left text-sm font-medium text-neutral-600"> Email address </label>
                                <div class="mt-1">
                                    <input id="email" name="email" type="email" autocomplete="email" required="" value={user.email} onChange={handleInputs} placeholder="Your Email" class="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"/>
                                </div>
                            </div>
                            <div>
                                <label for="mobile" class="block text-left text-sm font-medium text-neutral-600"> Mobile No. </label>
                                <div class="mt-1">
                                    <input id="phone" name="phone" type="number" autocomplete="phone" required="" value={user.phone} onChange={handleInputs} placeholder="Your Mobile Number" class="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"/>
                                </div>
                            </div>

                            <div class="space-y-1">
                                <label for="password" class="block text-left text-sm font-medium text-neutral-600"> Password </label>
                                <div class="mt-1">
                                    <input id="password" name="password" type="password" autocomplete="current-password" value={user.password} onChange={handleInputs} required="" placeholder="Your Password" class="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"/>
                                </div>
                            </div>
                            <div class="space-y-1">
                                <label for="cpassword" class="block text-left text-sm font-medium text-neutral-600">Confirm Password </label>
                                <div class="mt-1">
                                    <input id="confimedpassword" name="confimedpassword" type="password" value={user.confimedpassword} onChange={handleInputs} autocomplete="current-password" required="" placeholder="Re-enter the passowrd" class="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"/>
                                </div>
                            </div>

                            <div class="flex items-center justify-between">
                                <div class="flex items-center">
                                    <input id="male" name="gender" value={'male'} onChange={handleInputs} type="radio" class="w-4 h-4 text-blue-600 border-gray-200 rounded focus:ring-blue-500"/>
                                    <label for="male" class="block mx-2 text-sm text-neutral-600"> Male </label>
                                    <input id="female" name="gender" value={'female'} onChange={handleInputs} type="radio" class="w-4 h-4 text-blue-600 border-gray-200 rounded focus:ring-blue-500"/>
                                    <label for="female" class="block ml-2 text-sm text-neutral-600"> Female </label>
                                </div>
                            </div>

                            <div>
                                <button type="submit" name="submit" id="submit" onClick={postdata} class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Create Your Account!</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
            
          </div>
        </div>
      )}
    <nav className="shodow-md w-full sticky top-0 left-0 z-[100] bg-white border-b-2">
      <div className="md:flex items-center justify-between py-2 md:px-10 px-4">
        {console.log(location.pathname)}
        <Link to={"/"} class="flex title-font font-bold items-center">
          <img src="./logo.jpeg" className="w-10 h-10"></img>
          <span class="ml-3 text-xl">Stock Decode</span>
        </Link>

        <ul
          className={
            "bg-orange-400 xl:bg-transparent xl:flex xl:items-center h-screen xl:h-auto xl:pb-0 pb-12 absolute xl:static xl:z-auto z[-1] left-0 top-[72px] w-full xl:w-auto xl:pl-0 pl-9 transition-all duration-200 ease-in" +
            (navbarOpen ? " block" : " hidden")
          }
        >
          {Links.map((link) => (
            <li
              onClick={() => {
                setNavbarOpen(!navbarOpen);
              }}
              key={link.name}
              className="xl:ml-8 text-md font-medium xl:my-0 my-7"
            >
              <Link
                to={link.link}
                className={`py-2 px-3 rounded-md transition-all duration-200 ease-in hover:opacity-75 hover:bg-orange-600 ${
                  link.link == location.pathname
                    ? "bg-white text-black"
                    : "bg-none"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}

          <li className="xl:ml-8 text-md font-medium xl:my-0 my-7">
            <button onClick={() => {setIsActive1(!isActive1); setIsActive2(false)}} class="inline-flex items-center text-slate-900 bg-gray-100 border-0 py-1 px-3 focus:outline-none rounded-lg text-base mt-4 md:mt-0 hover:bg-orange-500 hover:text-white transition-colors duration-300 ease-linear">
              <Link to={"/"}>Log In</Link>
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </li>
        </ul>

        <div
          onClick={() => setNavbarOpen(!navbarOpen)}
          className="absolute right-8 top-6 cursor-pointer transition-all duration-500 ease-in xl:hidden"
        >
          {navbarOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </div>
      </div>
    </nav>
    </>
  );
}

const ModalContent2 = () => {
    return(
        <>
            
        </>
    )
}