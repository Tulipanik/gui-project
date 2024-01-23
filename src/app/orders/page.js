"use client";

import React, { useState, useEffect } from "react";
import OrderTable from "@/components/orderTable";
import MenuSimple from "@/components/sales-chart/dropdown";
import { currentOrders } from "@/mock-up//orders";
import { useTranslation } from "react-i18next";

export default function Orders() {
  const { t } = useTranslation();
  const [selectedOption, setSelectedOption] = useState("all");
  const [orders, setOrders] = useState(currentOrders);

  useEffect(() => {
    console.log("filtruje:");
    switch (selectedOption) {
      case "all":
        setOrders(currentOrders);
        break;
      case "paid":
        setOrders(currentOrders.filter((obj) => obj.status === "paid"));
        break;
      case "unpaid":
        setOrders(currentOrders.filter((obj) => obj.status === "unpaid"));
        break;
      case "in delivery":
        setOrders(currentOrders.filter((obj) => obj.status === "in delivery"));
        break;
    }
    console.log(orders);
  }, [selectedOption]);

  return (
    <div>
      <div className="mx-auto w-4/5 flex my-5">
      Count of orders: <span></span>
        <MenuSimple
          options={["all", "paid", "unpaid", "in delivery"]}
          setStatus={setSelectedOption}
        />
      </div>
      <OrderTable orders={orders} />
    </div>
  );
}
