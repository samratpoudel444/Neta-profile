import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export const PieChart = () => {
  const data = {
    labels: ["Male", "Female", "others"],
    datasets: [
      {
        label: "My First Dataset",
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <div className="bg-white lg:p-8 p-4 lg:gap-4 flex flex-col items-center justify-center hover:shadow-md shadow-2xl xl:h-128 rounded-2xl">
        <a className="text-2xl">Total Voters</a>
      <Doughnut data={data} options={options} />
    </div>
  );
};
