import React from "react";
import {Line} from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto";

const labels = [
  "0:00",
  "1:00",
  "2:00",
  "3:00",
  "4:00",
  "5:00",
  "6:00",
  "7:00",
  "8:00",
  "9:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
  "23:00",
];


const LineChart = () => {
    const data = {
        labels: labels,
        datasets: [
          {
            label: "Dataset 1",
            data: [12, 14, 2, 8, 3, 5, 9, 71],
            borderColor: "#f59e0b",
          },
          {
            label: "Dataset 2",
            data: [25,21545,21,545,2,1,54],
            borderColor: "#f59e0b",
          },
          {
            label: "Dataset 3",
            data: [246, 878, , 54, 89, 212, 15, 54],
            borderColor: "#fafc45",
          },
        ],
      };
  return (
    <>
      <div className="h-[22rem] mx-8 bg-blue-200 rounded-xl p-4">
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
