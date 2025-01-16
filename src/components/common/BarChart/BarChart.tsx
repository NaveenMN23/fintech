"use client";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { memo } from "react";
import { Bar } from "react-chartjs-2";

interface BarChartProps {
  data: {
    withdraw: Array<number>;
    deposit: Array<number>;
    week: Array<string>;
    labels: Array<string>;
  };
}

// Register required components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const options = {
  responsive: true,
  maintainAspectRatio: false,
  layout: {
    padding: {
      left: 3,
      right: 3,
    },
  },
  plugins: {
    legend: {
      display: true,
      position: "top" as const,
      align: "end" as const,
      labels: {
        usePointStyle: true,
        boxWidth: 10, // Size of the legend box
        boxHeight: 10, // Height of the legend box (optional, for better control)
        padding: 20, // Space between legend items
        font: {
          size: 14, // Font size of the legend labels
        },
      },
    },
    datalabels: {
      display: false, // Disable datalabels on bars
    },
  },
  scales: {
    x: {
      beginAtZero: true,
      grid: {
        display: false,
      },
    },
    y: {
      beginAtZero: true,
    },
  },
};

const BarChart: React.FC<BarChartProps> = ({ data }) => {
  const dataObj = {
    labels: data?.week,
    datasets: [
      {
        label: data?.labels[0],
        data: data?.withdraw,
        backgroundColor: "#232323",
        borderColor: "#232323",
        borderWidth: 1,
        borderRadius: Number.MAX_VALUE,
        borderSkipped: false,
        barPercentage: 0.8, // Reduce the bar width
        categoryPercentage: 0.4,
        barThickness: 8,
        maxBarThickness: 10,
        minBarThickness: 4,
      },
      {
        label: data?.labels[1],
        data: data?.deposit,
        backgroundColor: "#396AFF",
        borderColor: "#396AFF",
        borderWidth: 1,
        borderRadius: Number.MAX_VALUE,
        borderSkipped: false,
        barPercentage: 0.8, // Reduce the bar width
        categoryPercentage: 0.4,
        barThickness: 8,
        maxBarThickness: 10,
        minBarThickness: 4,
      },
    ],
  };

  return (
    <div className="h-[13rem]">
      <Bar data={dataObj} options={options} />;
    </div>
  );
};

export default memo(BarChart);
