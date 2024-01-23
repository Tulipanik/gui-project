"use client";

import React, { useState, useEffect } from "react";
import Top5Table from "@/components/offer-ranking/top5Table";
import {
  bestFiveOfertsByTurnOver,
  bestFiveOfertsByVeiws,
} from "../../mock-up/ranking";

export default function OfferRanking() {
  const [selectedOption, setSelectedOption] = useState("turnover");
  const [offers, setOffers] = useState(bestFiveOfertsByTurnOver);

  useEffect(() => {
    console.log("filtruje:");
    switch (selectedOption) {
      case "turnover":
        setOffers(bestFiveOfertsByTurnOver);
        break;
      case "number of sales":
        setOffers(bestFiveOfertsByVeiws);
        break;
    }
    console.log(offers);
  }, [selectedOption]);

  return (
    <div className="flex flex-col w-full h-full items-center">
      <h1 className="text-4xl mb-5 mt-2">Top 5</h1>
      <Top5Table
        offers={offers}
        measurment={selectedOption}
        setSelectedOption={setSelectedOption}
      />
    </div>
  );
}
