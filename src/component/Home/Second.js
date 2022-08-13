import React from "react";

const Second = () => {
  return (
    <>
      <section class="text-gray-600 body-font overflow-hidden">
        <div class="container px-16 pb-20 mx-auto">
          <h1 className="text-6xl text-black font-bold w-[36rem] mb-12">
            Get The Most Out Of Your Investments
          </h1>
          <div class="flex flex-col md:flex-row mt-12 gap-x-12">
            <div class="bg-gray-50 p-12 rounded-[2rem] md:w-2/5 shadow-lg flex flex-col items-start">
              <h2 class="sm:text-3xl text-2xl font-medium text-gray-900 mt-4 mb-4">
                Unlimited Portfolio Accounts
              </h2>
              <p class="leading-relaxed mb-8">
                Manage all your financial assets from one place
              </p>
              <a class="text-green-500 font-medium inline-flex items-center">
                Read More
                <svg
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div class="p-12 md:w-3/5 rounded-[2rem] bg-gray-50 shadow-lg flex flex-col items-start">
              <h2 class="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                Full Analytics in Your App
              </h2>
              <p class="leading-relaxed mb-8">
                Analyze the result and try different stategies for more income
              </p>
              <a class="text-green-500 font-medium inline-flex items-center">
                Read More
                <svg
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Second;