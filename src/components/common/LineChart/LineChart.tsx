// Styling
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
  ScriptableContext
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface LineChartProps {
  data: {
    values: Array<number>,
    labels: Array<string>
  }
}

const LineChartGradient: React.FC<LineChartProps> = ({ data }) => {
  const dataObj = {
    labels: data.labels,
    datasets: [
      {
        data: data.values,
        fill: "start",
        backgroundColor: (context: ScriptableContext<"line">) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 200);
          gradient.addColorStop(0, "#2D60FF40");
          gradient.addColorStop(1, "#2D60FF00");
          return gradient;
        },
        borderColor: "#1814F3"
      }
    ]
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    scales: {
      x: {
        grid: {
          display: false
        }
      }
    },
    elements: {
      line: {
        tension: 0.35
      }
    },
    plugins: {
      filler: {
        propagate: false
      },
      datalabels: {
        display: false,
      },
      legend: {
        display: false,
      },
    },
    interaction: {
      intersect: true
    }
  };

  return (
    <div className="h-[13rem]">
      <Line data={dataObj} options={options} />
    </div>
  );
}

export default LineChartGradient;
