import React from "react";
import { Link } from "react-router-dom";

const Hello = () => {
  return (
    <>
      <div>
        <h1 className="text-lg font-medium my-2 uppercase">Main Menu</h1>
        <div className="flex flex-col">
          <Link className="font-medium rounded-lg bg-blue-100 hover:bg-blue-300 mb-2 py-1 text-slate-900 text-left px-2" to="./addStock"><button><i class="fa-solid fa-square-plus"></i> Stock Entry</button></Link>
          <Link className="font-medium rounded-lg bg-blue-100 hover:bg-blue-300 mb-2 py-1 text-slate-900 text-left px-2" to="./compare"><button><i class="fa-solid fa-code-compare"></i> Compare Stocks</button></Link>
          <Link className="font-medium rounded-lg bg-blue-100 hover:bg-blue-300 mb-2 py-1 text-slate-900 text-left px-2" to="./"><button><i class="fa-solid fa-bookmark"></i> Favourites</button></Link>
        </div>
      </div>
    </>
  );
};

export default Hello;
