import { Config } from "./PolarChartConfig";
import {
  Chart as ChartJS,
  RadialLinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { PolarArea } from "react-chartjs-2";

ChartJS.register(RadialLinearScale, ArcElement, Tooltip, Legend);

const TerpScoreChart = props => {
  const formatData = (data, filter) => {
    return _.map(Object.values(data), filter);
  };

  const data = {
    datasets: [
      {
        label: "Terpene Scores",
        data: formatData(props, "score"),
        backgroundColor: [
          "rgba(250, 250, 110, 0.7)",
          "rgba(170, 228, 121, 0.7)",
          "rgba(100, 201, 135, 0.7)",
          "rgba(35, 170, 143, 0.7)",
          "rgba(0, 137, 138, 0.7)",
          "rgba(23, 104, 119, 0.7)",
          "rgba(42, 72, 88, 0.7)",
        ],
      },
    ],
    labels: formatData(props, "name"),
  };

  return (
    <div className={`chart-container h-96 w-full p-2`}>
      <PolarArea data={data} options={Config} type={PolarArea} />
    </div>
  );
};
export default TerpScoreChart;
