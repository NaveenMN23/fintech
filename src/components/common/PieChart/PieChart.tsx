import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

// Register required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const PieChart = () => {
  const data = {
    labels: ['Investment', 'Entertainment', 'Bill Expense', 'Others'],
    datasets: [
      {
        data: [20,30,15,35],
        backgroundColor: [
            '#396AFF',
            '#343C6A',
            '#FC7900',
            '#232323',
          ],
          borderColor: [
            '#396AFF',
            '#343C6A',
            '#FC7900',
            '#232323',
          ],
        borderWidth: 1,
        // offSet:20,
        hoverOffset:40,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio:false,
    plugins: {
      legend: {
        display:false,
      },
      tooltip: {
        enabled: true,
      },
      datalabels: {
        formatter: (value: number, context: { dataset: { data: []; }; }) => {
          const total = context.dataset.data.reduce((acc, curr) => acc + curr, 0);
          const percentage = ((value / total) * 100).toFixed(1) + "%";
          const label = context?.chart?.data.labels[context?.dataIndex];
          return `${label}\n${percentage}`; // Display value and percentage
        },
        color: "#fff", // Text color
        font: {
          weight: "bold",
        },
        anchor: "end", // Position adjustment
        align: "start", // Align text to slice
      },
    },
  };

  return (
    <div className="h-[14rem] overflow-visible">
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
