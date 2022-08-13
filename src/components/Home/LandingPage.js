import React from "react";

const LandingPage = () => {
  return (
    <>
      <section class="text-gray-600 body-font h-[90vh] relative">
        <div class="bg-lime-400 max-w-screen flex mx-8 my-12 rounded-2xl md:flex-row flex-col items-center h-[90%]">
          <div class="w-[40rem] px-12">
            <h1 class="title-font sm:text-4xl lg:text-6xl text-3xl mb-4 font-medium text-blue-900">
              "Risk Hai toh Ishq Hai!!"
            </h1>
            <p class="mb-8 leading-relaxed text-blue-900 font-medium">
              Work with all the necessary information and tools to boost money flow from your capital Investment using StockDecode!!
            </p>
              <button class="inline-flex text-white bg-slate-800 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                Log in
              </button>
          </div>
        </div>
          <div class="absolute -top-16 right-10 h-[100vh]">
            <img
              class="h-screen"
              alt="hero"
              src="../land.png"
            />
          </div>
      </section>
    </>
  );
};

export default LandingPage;