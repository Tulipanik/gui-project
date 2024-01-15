"use client";

import styles from "./../globals.css";
import { useRouter } from "next/navigation";

export default function MenuBar() {
  const router = useRouter();
  return (
    <ul className={`menuBar ${styles.menuBar}`}>
      <li onClick={() => router.push("/orders")}>Orders</li>
      <li>Sales Quality</li>
      <li>Buyer Opinions</li>
      <li>Offer Ranking</li>
      <li>Sales chart</li>
      <li>Sales tips</li>
    </ul>
  );
}
