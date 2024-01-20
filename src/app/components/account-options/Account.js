import Image from "next/image";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteForeverOutlinedIcon from "@mui/icons-material/DeleteForeverOutlined";

export default function Account({ accountName }) {
  return (
    <div className="mt-3 ml-3">
      <AccountCircleOutlinedIcon />
      <div className="inline-block pl-2 pr-10 border-r-2 border-orange-400 w-40 text-lg">
        {accountName}
      </div>
      <ModeEditOutlineOutlinedIcon />
      <DeleteForeverOutlinedIcon sx={{ color: "#F43426" }} />
    </div>
  );
}
