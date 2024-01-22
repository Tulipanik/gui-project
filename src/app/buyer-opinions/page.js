"use client";

import React, { useState, useEffect } from "react";
import OpinionTable from "@/components/opinionTable";
import MenuSimple from "@/components/sales-chart/dropdown";
import { allOpinions } from "@/mock-up/opinions";

export default function BuyerOpinions() {
  const [selectedOption, setSelectedOption] = useState("all");
  const [opinions, setOpinions] = useState(allOpinions);

  useEffect(() => {
    console.log("filtruje:");
    switch (selectedOption) {
      case "all":
        setOpinions(allOpinions);
        break;
      case "positive":
        setOpinions(allOpinions.filter(obj => obj.stars > 3));
        break;
      case "negative":
        setOpinions(allOpinions.filter(obj => obj.stars <= 3));
        break;
    };
    console.log(opinions)
  }, [selectedOption]);

  return (
    <div>
      <div className="mx-auto w-4/5 flex my-5">
        Opinion type: <span></span>
        <MenuSimple options={["all", "positive", "negative"]} setStatus={setSelectedOption} />
      </div>
      <OpinionTable opinions={opinions} />
    </div>
  );
}
