import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";

const colors = [
  "#264653", "#ffb703", "#ffafcc", "#f6bd60", "#fb8500", "#ff006e", "#9e2a2b", "#0081a7", "#f07167"
]

var Obj = [
  {
    cmpname: "ONGC",
    // cmpsym: "AAPL",
    change: "+4.82%",
    high: "139.70",
    low: "133.50"
  },
  {
    cmpname: "Reliance",
    // cmpsym: "AAPL",
    change: "+1.62%",
    high: "2,641.3",
    low: "2,582.2"
  },
  {
    cmpname: "Adani",
    // cmpsym: "AAPL",
    change: "+1.19%",
    high: "3,553.0",
    low: "3,462.6"
  },
  {
    cmpname: "TATA",
    // cmpsym: "AAPL",
    change: "-0.61%",
    high: "3,419.0",
    low: "3,381.2"
  },
  {
    cmpname: "BATA",
    // cmpsym: "AAPL",
    change: "-0.12%",
    high: "1,931.0",
    low: "1,884.0"
  },
  
  {
  cmpname: "ICICI",
    // cmpsym: "AAPL",
    change: "+1.71%",
    high: "877.25",
    low: "642.15"
  },
  {
    cmpname: "Axis",
      // cmpsym: "AAPL",
      change: "+0.22%",
      high: "762.00",
      low: "753.40"
    },
    {
      cmpname: "Bajaj",
        // cmpsym: "AAPL",
        change: "-0.13%",
        high: "7,343.0",
        low: "7,272.0"
      },
      {
        cmpname: "SBI",
          // cmpsym: "AAPL",
          change: "+1.13%",
          high: "531.80",
          low: "525.15"
        },
        {
          cmpname: "Nestle",
            // cmpsym: "AAPL",
            change: "-0.69%",
            high: "19,756.4",
            low: "19,413.7"
          },
]

const colorpicker = () => {
  let idx = Math.floor(Math.random() * 9);
  const col = `bg-red-500`
  return col;
}

const Favourites = () => {
  return (
    <>
      {console.log(colorpicker())}
      <div className="max-w-[80vw] rounded-3xl my-2">
        <Swiper
          slidesPerView={'5'}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper h-40"
        >
          {Obj.map((value, idx) => {
            return (
              <SwiperSlide>
                <div className="bg-white w-52 p-4 rounded-2xl">
                  <div className="flex flex-row justify-between items-center">
                    <button className={`px-3 py-2 rounded-full w-24 font-medium text-white bg-black`}> {value.cmpname} </button>
                    <h3 className={`font-medium ${(value.change.charAt(0)=="+")?"text-green-600":"text-red-500"}`}> {value.change} </h3>
                  </div>
                  <div className="flex flex-row justify-around font-medium items-center mt-2">
                    <div className="bg-blue-100 px-4 py-2 rounded-lg">
                      <h1 className="text-green-600">High <i class="fa-solid fa-arrow-up"></i></h1>
                      <h3 className="text-center"> {value.high} </h3>
                    </div>
                    <div className="bg-blue-100 px-4 py-2 rounded-lg">
                      <h1 className="text-red-600">Low <i class="fa-solid fa-arrow-down"></i></h1>
                      <h3 className="text-center"> {value.low} </h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default Favourites;
