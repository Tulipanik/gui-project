"use client";

import React, { useState } from 'react';
import MostlyBuyOptions from "./mostlyBuyOptions";
import {bestFiveOfertsByTurnOver, bestFiveOfertsByVeiws} from "../../mock-up/ranking"

export default function Top5Table() {
  const [offerts, setOfferts] = useState(bestFiveOfertsByTurnOver);

  return (
    <div className="bg-orange-400 w-10/12 h-5/6 p-5 px-1 pb-1">
      <MostlyBuyOptions name={offerts[0].productName} picesSold={offerts[0].numberOfSoldCopies} turnover={offerts[0].turnover}/>
      <MostlyBuyOptions name={offerts[1].productName} picesSold={offerts[1].numberOfSoldCopies} turnover={offerts[1].turnover}/>
      <MostlyBuyOptions name={offerts[2].productName} picesSold={offerts[2].numberOfSoldCopies} turnover={offerts[2].turnover}/>
      <MostlyBuyOptions name={offerts[3].productName} picesSold={offerts[3].numberOfSoldCopies} turnover={offerts[3].turnover}/>
      <MostlyBuyOptions name={offerts[4].productName} picesSold={offerts[4].numberOfSoldCopies} turnover={offerts[4].turnover}/>
    </div>
  );
}
