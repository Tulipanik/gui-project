import BasicRating from "../components/sales-quality/progressBar";
import QualityCategories from "../components/sales-quality/qualityCategories";
import QualityCheck from "../components/sales-quality/qualityCheck";

export default function SalesQuality() {
  return (
    <div className="w-full h-5/6 grid grid-cols-2 gap-4">
      <div className="col-start-1 col-end-1">
        <div className="flex flex-col h-full w-full justify-center items-center">
          <div className=" w-8/12 mb-10">
            <QualityCheck />
          </div>
          <div className=" w-8/12">
            <QualityCategories />
          </div>
        </div>
      </div>

      <div className="col-start-2 col-end-2">
        <div className="border-l-4 border-orange-400 flex h-full justify-center item-center items-center mb-32 mt-10">
          <BasicRating value={3} name={"siema:"} />
        </div>
      </div>
    </div>
  );
}
