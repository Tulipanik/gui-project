import Chart from "../components/sales-chart/chart";
import MenuSimple from "../components/sales-chart/dropdown";

export default function SalesChart() {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="inline-flex space-x-32 w-4/6 py-8">
        <div className="inline-flex items-center justify-center">
          Measure of presentation:
          <MenuSimple options={["day", "week", "year"]} />{" "}
        </div>
        <div className="inline-flex items-center justify-center">
          Time range: <MenuSimple options={["sales", "days"]} />
        </div>

        <button className="drop-shadow-lg bg-orange-500 p-3 px-8 rounded-full text-orange-100">
          Generate
        </button>
      </div>
      <Chart />
    </div>
  );
}
