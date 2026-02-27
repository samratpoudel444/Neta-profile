import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  Title
);

export const BarChart = () => {
  const data = {
    labels: ["25-35", "36-50", "51-65", "65+"],
    datasets: [
      {
        data: [567, 1571, 1071, 196], // ✅ no label here
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: "Age Distribution of Candidates",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-white p-8 flex flex-col items-center justify-center hover:shadow-md shadow-2xl xl:h-128 rounded-2xl">
      <Bar data={data} options={options} />
    </div>
  );
};
