"use client";

import Image from "next/image";
import Account from "./Account";
import HighlightOffRoundedIcon from "@mui/icons-material/HighlightOffRounded";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";

export default function MainOptions() {
  return (
    <div className="absolute z-40 w-3/4 h-3/4 mt-20 bg-orange-200 border-2 border-orange-400">
      <HighlightOffRoundedIcon className="absolute w-7 h-7 mt-1 right-1" />
      <h1 className="text-center text-4xl mt-5">Main account options</h1>
      <div className="flex border-4 w-11/12 h-5/6 mt-5 mx-auto border-orange-400 rounded-xl columns-3 p-5">
        <div className="w-2/6 border-r-4 border-orange-400">
          <h2 className="text-3xl text-center mb-10">Account information:</h2>
          <div className="[&>*]:mt-10 [&_button]:bg-orange-400 [&_button]:p-4 [&_button]:rounded-full [&_button]:drop-shadow-md [&_button]:text-white">
            <p>
              Your login: <span>USER</span>
            </p>
            <p>
              Your e-mail<span>example@email.com</span>
            </p>
            <p>
              Shop URL: <span>https://shop.com</span>
            </p>
            <div>
              Password: <button>Change password</button>
            </div>
            <button>Change information</button>
          </div>
        </div>
        <div className="w-2/6 border-r-4 border-orange-400">
          <h2 className="text-3xl text-center mb-10">Co-related accounts:</h2>
          <Account accountName={"siema"} />
          <Account accountName={"witam"} />
          <Account accountName={"heja"} />
          <div className="mt-10 ml-2 text-xl">
            <PersonAddAltOutlinedIcon /> Add account
          </div>
        </div>
        <div className="w-2/6">
          <h2 className="text-3xl text-center mb-10">Preferences</h2>
          <div>
            <label>
              <input
                type="radio"
                name="options"
                value="option1"
                //   checked={selectedOption === "option1"}
                //   onChange={handleOptionChange}
                className="form-radio text-blue-500"
              />
              English
            </label>

            <label>
              <input
                type="radio"
                name="options"
                value="option2"
                //   checked={selectedOption === "option2"}
                //   onChange={handleOptionChange}
              />
              Polski
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
