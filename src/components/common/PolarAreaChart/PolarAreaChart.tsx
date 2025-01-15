import React from 'react';
import { Chart as ChartJS, Tooltip, Legend, Title, ArcElement, RadialLinearScale } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { PolarArea } from 'react-chartjs-2';

// Register the required components for a polar area chart
ChartJS.register(ArcElement, RadialLinearScale, Tooltip, Legend, Title, ChartDataLabels);

const data = {
  labels: ['Investment', 'Entertainment', 'Bill Expense', 'Others'],
  datasets: [
    {
      label: 'My Polar Area Chart',
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
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    tooltip: {
      callbacks: {
        label: (context: { label: any; raw: any; }) => {
          return `${context.label}: ${context.raw}`;
        },
      },
    },
    datalabels: {
      color: '#000', // Label color
      formatter: (value: any, context: any) => {
        // Display the raw value or any custom label
        return value;
      },
      font: {
        size: 14, // Font size of the label
        weight: 'bold',
      },
      anchor: 'center', // Position of the label
      align: 'center',  // Alignment of the label
    },
  },
};

const PolarAreaChart = () => {
  return (
    <div>
      <h2>My Polar Area Chart</h2>
      <PolarArea data={data} options={options} />
    </div>
  );
};

export default PolarAreaChart;
