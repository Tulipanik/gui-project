import { Chart as ChartJS } from "chart.js/auto";
import { Line } from "react-chartjs-2";

export default function Chart({ xAxis, yAxis }) {
  const data = {
    labels: xAxis,
    datasets: [
      {
        label: "Sales Data",
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
        data: yAxis,
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
    <div className="w-4/6">
      <Line data={data} options={options} />
    </div>
  );
}
