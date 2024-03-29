import { changePasswdWindow } from "@/lib/features/windows/windowsSlice";
import { usersData } from "@/mock-up/user";
import { useDispatch } from "react-redux";

export default function ChangePassword() {
  const data = {
    password: "",
    password_1: "",
    password_2: "",
  };
  const dispatch = useDispatch();

  const changePassword = () => {
    if (
      data.password_1 == data.password_2 &&
      password == usersData[0].password
    ) {
      usersData[0].password = data.password_1;
    }
  };
  return (
    <div className="absolute z-50 w-2/6 h-3/6 mt-32 bg-orange-200 border-2 border-orange-400">
      <h2 className="text-center text-3xl mt-5">Change password </h2>
      <div className="border-4 rounded-lg border-orange-400 w-8/12 m-24 mt-10">
        <from className="[&>input]:block [&>*]:p-2 [&>input]:ml-4 [&>input]:mt-3 [&>input]:rounded-lg [&>input]:w-11/12">
          <input
            placeholder="Old password"
            onChange={(e) => (data.password = e.target.value)}
          />
          <input
            placeholder="New password"
            onChange={(e) => (data.password_1 = e.target.value)}
          />
          <input
            placeholder="Repeat new password"
            onChange={(e) => (data.password_2 = e.target.value)}
          />
          <div className="flex mt-10 ml-2 [&_button]:p-2 w-full space-x-5 [&_button]:w-40 [&_button]:rounded-full [&_button]:drop-shadow-md text-white">
            <button className="bg-orange-500" onClick={() => changePassword()}>
              Change password
            </button>
            <button
              className="bg-orange-700 right-0"
              onClick={() => dispatch(changePasswdWindow())}
            >
              Cancel
            </button>
          </div>
        </from>
      </div>
    </div>
  );
}
