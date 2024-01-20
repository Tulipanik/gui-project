"use client";

import Image from "next/image";
import Account from "./Account";

export default function MainOptions() {
  return (
    <div className="absolute z-40 w-3/4 h-3/4 mt-20 bg-orange-200 border-2 border-orange-400">
      <div className="absolute w-7 h-7 border-2 rounded-full mt-1 right-1">
        <div className="flex w-7 h-7 justify-center">
          <Image src="/cross.png" width={10} height={10} />
        </div>
      </div>
      <h1 className="text-center text-4xl mt-5">Main account options</h1>
      <div className="flex border-4 w-11/12 h-5/6 mt-5 mx-auto border-orange-400 rounded-xl columns-3">
        <div>
          <h2>Account information:</h2>
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
        <div>
          <h2>Co-related accounts:</h2>
          <Account accountName={"siema"} />
        </div>
        <div>
          <h2>Preferences</h2>
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
