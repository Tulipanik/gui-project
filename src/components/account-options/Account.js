import Image from "next/image";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";
import {
  editAccWindow,
  deleteAccWindow,
} from "@/lib/features/windows/windowsSlice";
import { useDispatch } from "react-redux";
import AccountName from "../account";

export default function Account({ accountName }) {
  const dispatch = useDispatch();
  return (
    <div className="[&>*]:inline-block mt-3 ml-3">
      <div className="border-r-2 border-orange-400 w-60">
        <AccountName accountName={accountName} />
      </div>

      <ModeEditOutlineOutlinedIcon
        onClick={() => dispatch(editAccWindow())}
        sx={{ cursor: "pointer" }}
      />
      <DeleteForeverOutlinedIcon
        onClick={() => dispatch(deleteAccWindow())}
        sx={{ color: "#F43426", cursor: "pointer" }}
      />
    </div>
  );
}
