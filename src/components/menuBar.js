"use client";

import styles from "./../app/globals.css";
import Link from "next/link";

export default function MenuBar() {
  return (
    <ul className={`menuBar ${styles.menuBar}`}>
      <li>
        <Link href="/orders">Orders</Link>
      </li>
      <li>
        <Link href="/sales-quality">Sales Quality</Link>
      </li>
      <li>
        <Link href="/buyer-opinions">Buyer Opinions</Link>
      </li>
      <li>
        <Link href="/offer-ranking">Offer Ranking</Link>
      </li>
      <li>
        <Link href="/sales-chart">Sales chart</Link>
      </li>
      <li>
        <Link href="/sales-tips">Sales tips</Link>
      </li>
    </ul>
  );
}
