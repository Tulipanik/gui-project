import MostlyBuyOptions from "./mostlyBuyOptions";
import MostlyViedOptions from "./mostlyViedOptions";

export default function Top5Table({ offers, measurment }) {
  if (measurment === "turnover") {
    return (
      <div className="bg-orange-400 w-10/12 h-[75%] p-5 px-1 pb-1">
        <MostlyBuyOptions
          name={offers[0].productName}
          picesSold={offers[0].numberOfSoldCopies}
          turnover={offers[0].turnover}
        />
        <MostlyBuyOptions
          name={offers[1].productName}
          picesSold={offers[1].numberOfSoldCopies}
          turnover={offers[1].turnover}
        />
        <MostlyBuyOptions
          name={offers[2].productName}
          picesSold={offers[2].numberOfSoldCopies}
          turnover={offers[2].turnover}
        />
        <MostlyBuyOptions
          name={offers[3].productName}
          picesSold={offers[3].numberOfSoldCopies}
          turnover={offers[3].turnover}
        />
        <MostlyBuyOptions
          name={offers[4].productName}
          picesSold={offers[4].numberOfSoldCopies}
          turnover={offers[4].turnover}
        />
      </div>
    );
  } else {
    return (
      <div className="bg-orange-400 w-10/12 h-5/6 p-5 px-1 pb-1">
        <MostlyViedOptions
          name={offers[0].productName}
          picesSold={offers[0].numberOfSoldCopies}
          views={offers[0].views}
        />
        <MostlyViedOptions
          name={offers[1].productName}
          picesSold={offers[1].numberOfSoldCopies}
          views={offers[1].views}
        />
        <MostlyViedOptions
          name={offers[2].productName}
          picesSold={offers[2].numberOfSoldCopies}
          views={offers[2].views}
        />
        <MostlyViedOptions
          name={offers[3].productName}
          picesSold={offers[3].numberOfSoldCopies}
          views={offers[3].views}
        />
        <MostlyViedOptions
          name={offers[4].productName}
          picesSold={offers[4].numberOfSoldCopies}
          views={offers[4].views}
        />
      </div>
    );
  }
}
