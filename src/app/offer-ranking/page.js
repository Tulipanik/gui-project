import Top5Table from "../components/offer-ranking/top5Table";

export default function OfferRanking() {
  return (
    <div className="flex flex-col w-full h-full items-center">
      <h1 className="text-2xl">Top 5</h1>
      <Top5Table />
    </div>
  );
}
