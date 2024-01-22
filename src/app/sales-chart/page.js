"use client";

import React, { useState } from "react";
import Chart from "@/components/sales-chart/chart";
import MenuSimple from "@/components/sales-chart/dropdown";
import {
  dataSortedByHours,
  dataSortedByDays,
  dataSortedByMounths,
} from "@/mock-up/chartData";

export default function SalesChart() {
  const [selectedMeasure, setSelectedMeasure] = useState("turnover");
  const [selectedTimeRange, setSelectedTimeRange] = useState("today");
  const [currentData, setCurrentData] = useState(dataSortedByHours);
  const [xAxis, setXaxis] = useState([
    "08:00-09:00",
    "09:00-10:00",
    "10:00-11:00",
    "11:00-12:00",
    "12:00-13:00",
    "13:00-14:00",
    "14:00-15:00",
    "15:00-16:00",
    "16:00-17:00",
  ]);
  const [yAxis, setYaxis] = useState([30, 90, 10, 200, 250, 190, 50, 15, 12]);

  const handleClick = () => {
    return () => {
      console.log(selectedMeasure);
      console.log(selectedTimeRange);
      switch (selectedTimeRange) {
        case "today":
          setCurrentData(dataSortedByHours);
          break;

        case "this week":
          setCurrentData(dataSortedByDays);
          break;

        case "last week":
          setCurrentData(dataSortedByMounths);
          break;

        default:
          setCurrentData(dataSortedByHours);
          break;
      }

      setXaxis(currentData.map((component) => component.time));

      switch (selectedMeasure) {
        case "turnover":
          setYaxis(currentData.map((component) => component.turnover));
          break;

        case "number of sales":
          setYaxis(currentData.map((component) => component.sales));
          break;
      }
      console.log(xAxis);
      console.log(yAxis);
    };
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="inline-flex space-x-32 w-4/6 py-8">
        <div className="inline-flex items-center justify-center">
          Measure of presentation:
          <MenuSimple
            options={[
              "turnover",
              "number of sales",
            ]} /*setStatus={setSelectedMeasure()}*/
          />{" "}
        </div>
        <div className="inline-flex items-center justify-center">
          Time range:{" "}
          <MenuSimple
            options={[
              "today",
              "this week",
              "last week",
            ]} /*setStatus={setSelectedTimeRange()}*/
          />
        </div>

        <button
          className="drop-shadow-lg bg-orange-500 p-3 px-8 rounded-full text-orange-100"
          onClick={handleClick()}
        >
          Generate
        </button>
      </div>
      <Chart xAxis={xAxis} yAxis={yAxis} />
    </div>
  );
}
