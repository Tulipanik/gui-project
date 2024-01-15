"use client";

import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";

export default function Chart() {
  const data = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Sample Data",
        borderColor: "#CA722E",
        borderWidth: 2,
        pointBackgroundColor: "#CA722E",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#CA722E",
        pointHoverBorderColor: "#CA722E",
        pointHoverBorderWidth: 2,
        pointRadius: 4,
        pointHitRadius: 10,
        data: [65, 59, 59, 61, 60],
      },
    ],
  };

  const options = {
    scales: {
      x: [
        {
          type: "category",
          labels: data.labels,
        },
      ],
      y: [
        {
          beginAtZero: true,
        },
      ],
    },
  };

  return (
    <div className="h-4/6">
      <h2>Bar Chart Example</h2>
      <Line data={data} options={options} />
    </div>
  );
}
