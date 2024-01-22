"use client";

import React, { useState } from 'react';
import {currentOrders} from "../mock-up/orders"

export default function OrderTable() {
  const [orders, setOrders] = useState(currentOrders);

  return (
    <table className="mx-auto w-4/5 border-2 border-solid border-orange-400 text-left">
      <thead className="bg-orange-200">
        <th className="border-solid border-2 border-orange-400 py-2 font-thin">
          Nr.
        </th>
        <th className="border-solid border-2 border-orange-400 font-thin">
          Order Id
        </th>
        <th className="border-solid border-2 border-orange-400 font-thin">
          Date of order
        </th>
        <th className="border-solid border-2 border-orange-400 font-thin">
          Status
        </th>
      </thead>
      <tbody className="h-4/5">
        {orders.map((order, index) => (
          <tr key={order.id}>
            <td className="border-solid border-2 border-orange-400 py-2 font-thin">{index + 1}</td>
            <td className="border-solid border-2 border-orange-400 font-thin">{order.orderID}</td>
            <td className="border-solid border-2 border-orange-400 font-thin">{order.date}</td>
            <td className="border-solid border-2 border-orange-400 font-thin">{order.status}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
