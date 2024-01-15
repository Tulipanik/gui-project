import BasicRating from "../components/sales-quality/progressBar";
import QualityCategories from "../components/sales-quality/qualityCategories";
import QualityCheck from "../components/sales-quality/qualityCheck";

export default function SalesQuality() {
  return (
    <div>
      <BasicRating value={3} name={"siema:"} />
      <QualityCheck />
      <QualityCategories />
    </div>
  );
}
