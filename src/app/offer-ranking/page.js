import Top5Table from "../components/offer-ranking/top5Table";
import MenuSimple from "../components/sales-chart/dropdown";

export default function OfferRanking() {
  return (
    <div className="flex flex-col w-full h-full items-center">
      <h1 className="text-2xl">Top 5</h1>
      <MenuSimple options={["turnover", "number of sales"]} /*setStatus={setSelectedMeasure()}*/ />{" "}
      <Top5Table />
    </div>
  );
}
