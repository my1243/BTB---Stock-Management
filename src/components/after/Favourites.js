import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "../../App.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper";

const colors = [
  "#264653",
  "#ffb703",
  "#ffafcc",
  "#f6bd60",
  "#fb8500",
  "#ff006e",
  "#9e2a2b",
  "#0081a7",
  "#f07167",
];

const colorpicker = () => {
  let idx = Math.floor(Math.random() * 9);
  console.log(idx);
  const col = `bg-[${colors[idx]}]`;
  console.log(col);
  return col;
};

const Favourites = (props) => {
    const [obj,setobj] = useState([{}]);
    const favitems = props.favitems;
    const getHighLow = async (sys) => {
        const url = `https://finnhub.io/api/v1/quote?symbol=${sys}&token=cddrh5qad3iag7bhufkgcddrh5qad3iag7bhufl0`
        const res = await fetch(url);
        const data = await res.json();
        // console.log(data);
        setobj((e) => [...e,data]);
        // console.log(obj);
    }
    useEffect(() => {
        setobj([]);
        favitems.map((val,idx) => {
            getHighLow(val);
        })
    },[]);

  return (
    <>
      {/* {console.log(colorpicker())} */}
      {/* {console.log(obj)} */}
      {/* {console.log(obj)} */}
      { obj.length == favitems.length ?
       <div className="max-w-[80vw] rounded-3xl my-2 z-1">
        <Swiper
          slidesPerView={"5"}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper h-40"
        >
          {obj.map((value, idx) => {
            return (
              <SwiperSlide>
                <div className="bg-white w-56 p-4 rounded-2xl">
                  <div className="flex flex-row justify-between items-center">
                    <button
                      className={`px-3 py-2 rounded-full w-24 font-medium bg-[#ffaf07] text-center ${colorpicker()}`}
                    >
                      {favitems[idx]}
                    </button>
                    <h3
                      className={`font-medium mr-2 ${
                        value.dp > 0
                          ? "text-green-600"
                          : "text-red-500"
                      }`}
                    >
                      {value.dp.toFixed(2)}%
                    </h3>
                  </div>
                  <div className="flex flex-row justify-around font-medium items-center mt-2">
                    <div className="bg-blue-100 px-4 py-2 rounded-lg">
                      <h1 className="text-green-600">
                        High <i class="fa-solid fa-arrow-up"></i>
                      </h1>
                      <h3 className="text-center"> {value.h}</h3>
                    </div>
                    <div className="bg-blue-100 px-4 py-2 rounded-lg">
                      <h1 className="text-red-600">
                        Low <i class="fa-solid fa-arrow-down"></i>
                      </h1>
                      <h3 className="text-center"> {value.l} </h3>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      : <p>No data!</p>
      }
    </>
  );
};

export default Favourites;
