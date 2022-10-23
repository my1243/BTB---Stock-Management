import React from "react";
import {Line} from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto";
import { PromiseProvider } from "mongoose";

const labels = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];


const LineChart = (prop) => {
    const data = {
        labels: labels,
        datasets: [
          {
            label: "IBM",
            data: prop.d1.map((val) => val),
            borderColor: "#000000",
          },
          {
            label: "APPLE",
            data: prop.d2.map((val) => val),
            borderColor: "#ffb703",
          },
          {
            label: "ADOBE",
            data: prop.d3.map((val) => val),
            borderColor: "#fafc45",
          },
        ],
      };
  return (
    <>
      <div className="h-[24.5rem] bg-blue-200 rounded-xl p-4 mr-4">
        <Line
          data={data}
          options={{
            maintainAspectRatio:false,
            plugins: {
              legend: {
                position: "top",
              },
              title: {
                display: true,
                text: "Comparison of last 30 days data",
              },
            },
          }}
        />
      </div>
    </>
  );
};

export default LineChart;
