import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

// Register required Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

interface PieChartProps {
  data: {
    values: Array<number>;
    labels: Array<string>;
  };
}

const PieChart: React.FC<PieChartProps> = ({ data }) => {
  const dataObj = {
    labels: data.labels,
    datasets: [
      {
        data: data.values,
        backgroundColor: ["#396AFF", "#343C6A", "#FC7900", "#232323"],
        borderColor: ["#396AFF", "#343C6A", "#FC7900", "#232323"],
        borderWidth: 1,
        // offSet:20,
        hoverOffset: 40,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: true,
      },
      datalabels: {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        formatter: (value: number, context: any) => {
          const total = context.dataset.data.reduce(
            (acc: number, curr: number) => acc + curr,
            0,
          );
          const percentage = ((value / total) * 100).toFixed(1) + "%";
          const label = context?.chart?.data.labels[context?.dataIndex];
          return `${label}\n${percentage}`; // Display value and percentage
        },
        color: "#fff", // Text color
        font: {
          weight: "bold" as const,
        },
        anchor: "end" as const, // Position adjustment
        align: "start" as const, // Align text to slice
      },
    },
  };

  return (
    <div className="h-[14rem] overflow-visible">
      <Pie data={dataObj} options={options} />
    </div>
  );
};

export default PieChart;
