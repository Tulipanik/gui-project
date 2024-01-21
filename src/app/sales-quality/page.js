import BasicRating from "../components/sales-quality/progressBar";
import QualityCategories from "../components/sales-quality/qualityCategories";
import QualityCheck from "../components/sales-quality/qualityCheck";
import {salesQualities} from "../mock-up/sales.quality"

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
        <div className="border-l-4 border-orange-400 flex flex-col h-full items-start justify-center mb-32 mt-10">
          3 aspects in which you are the best:
          <BasicRating value={salesQualities[0].score} name={salesQualities[0].aspect} />
          <BasicRating value={salesQualities[1].score} name={salesQualities[1].aspect} />
          <BasicRating value={salesQualities[2].score} name={salesQualities[2].aspect} />
        </div>
      </div>
    </div>
  );
}
