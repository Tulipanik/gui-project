"use client";

import React, { useState } from "react";
import { allOpinions } from "@/mock-up/opinions";

export default function OpinionTable() {
  const [opinions, setOpinions] = useState(
    [...allOpinions].sort((a, b) => b.stars - a.stars)
  );

  return (
    <table className="mx-auto w-4/5 border-2 border-solid border-orange-400 text-left">
      <thead className="bg-orange-200">
        <th className="border-solid border-2 border-orange-400 py-2 font-thin">
          Nr.
        </th>
        <th className="border-solid border-2 border-orange-400 font-thin">
          Opinion
        </th>
        <th className="border-solid border-2 border-orange-400 font-thin">
          Date of publishing
        </th>
        <th className="border-solid border-2 border-orange-400 font-thin">
          Stars given
        </th>
      </thead>
      <tbody className="h-4/5">
        {opinions.map((opinion, index) => (
          <tr key={opinion.id}>
            <td className="border-solid border-2 border-orange-400 py-2 font-thin">
              {index + 1}
            </td>
            <td className="border-solid border-2 border-orange-400 font-thin">
              {opinion.opinion}
            </td>
            <td className="border-solid border-2 border-orange-400 font-thin">
              {opinion.date}
            </td>
            <td className="border-solid border-2 border-orange-400 font-thin">
              {opinion.stars + " / 5"}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
