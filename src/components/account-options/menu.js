import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import AccountName from "../account";
import LogedUser from "../logedUser";
import { usersData } from "@/mock-up/user";
import { mainWindow } from "@/lib/features/windows/windowsSlice";
import { useDispatch } from "react-redux";

export default function Menu() {
  const dispatch = useDispatch();
  return (
    <div
      className="absolute bg-orange-100 w-2/12 h-screen z-10 border-4 border-orange-600 rounded-bl-3xl"
      style={{ height: "92vh", right: "2.5vh" }}
    >
      <div className="flex flex-col border-orange-600 h-full w-full">
        <div className=" flex justify-end w-full border-b-4 border-orange-600 py-3">
          <LogedUser />
        </div>
        <div className="border-b-4 pl-2 border-orange-600 [&>*]:py-3 text-lg">
          Co related accounts:
          {usersData[0].corelaredAccounts.map((item, index) => (
            <AccountName key={index} accountName={item} />
          ))}
        </div>
        <ul className="mt-5 ml-2 [&_li]:py-3 [&_li]:cursor-pointer">
          <li>
            <DarkModeOutlinedIcon width={40} /> Change theme mode
          </li>
          <li onClick={() => dispatch(mainWindow())}>
            <ManageAccountsOutlinedIcon width={40} /> Main account options
          </li>
          <li>
            <LogoutOutlinedIcon width={40} /> Log out
          </li>
        </ul>
      </div>
    </div>
  );
}
