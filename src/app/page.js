import Image from "next/image";
import { orders, opinions, ranking } from "@/mock-up/dashboard";

export default function Home() {
  return (
    <div class="grid grid-cols-3 gap-4 my-5 mx-5">
      <div class="bg-orange-200 rounded-lg drop-shadow-md">
        Orders
        <table className="mx-auto w-4/5 border-2 border-solid border-orange-400 text-left">
          <thead className="bg-orange-200">
            <th className="border-solid border-2 border-orange-400 py-2 font-thin">
              Order Id
            </th>
            <th className="border-solid border-2 border-orange-400 font-thin">
              Status
            </th>
          </thead>
          <tbody className="h-4/5">
            {orders.map((order) => (
            <tr key={order.id}>
              <td className="border-solid border-2 border-orange-400 py-2 font-thin">{order.orderID}</td>
              <td className="border-solid border-2 border-orange-400 font-thin">{order.status}</td>
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
              <td className="border-solid border-2 border-orange-400 py-2 font-thin">{opinion.opinion}</td>
              <td className="border-solid border-2 border-orange-400 font-thin">{opinion.stars + "/5"}</td>
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
              <td className="border-solid border-2 border-orange-400 py-2 font-thin">{offer.name}</td>
              <td className="border-solid border-2 border-orange-400 font-thin">{offer.turnover}</td>
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
      <div class="col-span-2 ">05</div>
    </div>
  );
}
