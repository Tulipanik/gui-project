"use client";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import styles from "./../app/globals.css";
import { usersData } from "@/mock-up/user";
import { mainSideWindow } from "@/lib/features/windows/windowsSlice";
import { useDispatch } from "react-redux";

export default function LogedUser() {
  const dispatch = useDispatch();
  return (
    <div
      className={`user ${styles.user}`}
      onClick={() => dispatch(mainSideWindow())}
    >
      Loged as: <span>{usersData[0].username}</span>
      <PersonOutlineOutlinedIcon width={60} />
    </div>
  );
}
