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
          "#5EB1BF",
          "#54F2F2",
          "#64403E",
          "#F4E04D",
          "#D2AB99",
          "#7F7EFF",
          "#00FFC5",
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
