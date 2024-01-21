import OpinionTable from "../components/opinionTable";
import MenuSimple from "../components/sales-chart/dropdown";

export default function BuyerOpinions() {
  return (
    <div>
      <div className="mx-auto w-4/5">
        Opinion type: <span></span>
        <MenuSimple options={["positive", "negative"]} />
      </div>
      <OpinionTable />
    </div>
  );
}
