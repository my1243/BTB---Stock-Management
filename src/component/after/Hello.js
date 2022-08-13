import React from "react";

const Hello = () => {
  return (
    <>
      <div>
        <h1 className="text-lg font-medium my-2 uppercase">Main Menu</h1>
        <div className="flex flex-col">
          <button className="font-medium rounded-lg bg-blue-100 mb-2 py-1 text-slate-900 text-left px-2"><i class="fa-solid fa-square-plus"></i> Stock Entry</button>
          <button className="font-medium rounded-lg bg-blue-100 mb-2 py-1 text-slate-900 text-left px-2"><i class="fa-solid fa-code-compare"></i> Compare Stocks</button>
          <button className="font-medium rounded-lg bg-blue-100 mb-2 py-1 text-slate-900 text-left px-2"><i class="fa-solid fa-bookmark"></i> Favourites</button>
        </div>
      </div>
    </>
  );
};

export default Hello;
