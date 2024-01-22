import { deleteAccWindow } from "@/lib/features/windows/windowsSlice";
import { useDispatch } from "react-redux";

export default function DeleteRelatedAccount() {
  const dispatch = useDispatch();
  const account = "siema";
  return (
    <div className="absolute z-50 w-2/6 h-3/6 bg-orange-200 border-2 border-orange-400 mt-32">
      <h2 className="text-center text-3xl mt-5">Delete related account</h2>
      <div className="flex flex-col mx-auto border-4 rounded-lg border-orange-400 justify-center w-4/6 mt-7">
        <div className="text-center mt-2">
          Do you want to delete this account:
        </div>
        <div className="text-center mt-10 ">{account}</div>
        <div className="[&_button]:inline-block mt-10 [&_*]:py-3 space-x-2 [&_*]:w-40 [&_*]:rounded-full justify-center">
          <button className="bg-[#F43426]">Delete</button>
          <button
            className="bg-orange-600"
            onClick={() => dispatch(deleteAccWindow())}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
