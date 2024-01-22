"use client";

import { useTranslation } from "react-i18next";
import { orders, opinions, ranking } from "@/mock-up/dashboard";
import Chart from "@/components/sales-chart/chart";

export default function Home() {
  return (
    <div class="grid grid-cols-3 gap-4 my-5 mx-5">
      <div class="bg-orange-200 rounded-lg drop-shadow-md">
        {}
        <table className="mx-auto w-4/5 border-2 border-solid border-orange-400 text-left">
          <thead className="bg-orange-200">
            <tr>
              Orders
              <th className="border-solid border-2 border-orange-400 py-2 font-thin">
                Order Id
              </th>
              <th className="border-solid border-2 border-orange-400 font-thin">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="h-4/5">
            {orders.map((order) => (
              <tr key={order.id}>
                <td className="border-solid border-2 border-orange-400 py-2 font-thin">
                  {order.orderID}
                </td>
                <td className="border-solid border-2 border-orange-400 font-thin">
                  {order.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div class="bg-orange-200 rounded-lg drop-shadow-md">
        Buyer opinions:
        <table className="mx-auto w-4/5 border-2 border-solid border-orange-400 text-left">
          <thead className="bg-orange-200">
            <th className="border-solid border-2 border-orange-400 py-2 font-thin">
              Opinion
            </th>
            <th className="border-solid border-2 border-orange-400 font-thin">
              Stars given
            </th>
          </thead>
          <tbody className="h-4/5">
            {opinions.map((opinion) => (
              <tr key={opinion.id}>
                <td className="border-solid border-2 border-orange-400 py-2 font-thin">
                  {opinion.opinion}
                </td>
                <td className="border-solid border-2 border-orange-400 font-thin">
                  {opinion.stars + "/5"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div class="bg-orange-200 rounded-lg drop-shadow-md">
        Offer ranking:
        <table className="mx-auto w-4/5 border-2 border-solid border-orange-400 text-left">
          <thead className="bg-orange-200">
            <th className="border-solid border-2 border-orange-400 py-2 font-thin">
              Offer name
            </th>
            <th className="border-solid border-2 border-orange-400 font-thin">
              Turnover
            </th>
          </thead>
          <tbody className="h-4/5">
            {ranking.map((offer) => (
              <tr key={offer.id}>
                <td className="border-solid border-2 border-orange-400 py-2 font-thin">
                  {offer.name}
                </td>
                <td className="border-solid border-2 border-orange-400 font-thin">
                  {offer.turnover}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div class="bg-orange-200 rounded-lg drop-shadow-md">
        Sales Quality:
        <h2>Quality check:</h2>
        <h5>You are almost perfect seller !!!</h5>
        <p>
          Score: <span>380</span>/<span>450</span>
        </p>
      </div>
      <div class="col-span-2 bg-orange-200 flex ">
        Sales chart:{" "}
        <div className="right-0 w-11/12">
          <Chart
            yAxis={[30, 90, 10, 200, 250, 190, 50, 15, 12]}
            xAxis={[
              "08:00-09:00",
              "09:00-10:00",
              "10:00-11:00",
              "11:00-12:00",
              "12:00-13:00",
              "13:00-14:00",
              "14:00-15:00",
              "15:00-16:00",
              "16:00-17:00",
            ]}
          />
        </div>
      </div>
    </div>
  );
}
