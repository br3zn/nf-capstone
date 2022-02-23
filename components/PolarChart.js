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
  const formatData = data => {
    return _.map(Object.values(data), "score");
  };

  const data = {
    datasets: [
      {
        label: "Terpene Scores",
        data: formatData(props),
      },
    ],
  };

  return (
    <div className={`chart-container h-full w-full p-2`}>
      <PolarArea data={data} options={Config} type={PolarArea} />
    </div>
  );
};
export default TerpScoreChart;
