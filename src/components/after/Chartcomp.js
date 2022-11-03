import React from "react";
import {Line} from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto";

const labels = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];


const LineChart = (prop) => {
    const data = {
        labels: labels,
        datasets: [
          {
            label: prop.c1,
            data: prop.k1.map((val) => val.close),
            borderColor: "#F72585",
          },
          {
            label: prop.c2,
            data: prop.d2.map((val) => val.close),
            borderColor: "#4361EE",
          },
          {
            label: prop.c3,
            data: prop.d3.map((val) => val.close),
            borderColor: "#480C",
          },
        ],
      };
  return (
    <>
      <div className="h-[24.5rem] shadow-lg border-2 border-slate-600 bg-gray-100 rounded-xl p-4 mr-4">
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
