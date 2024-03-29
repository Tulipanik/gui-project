import "./globals.css";
import styles from "./globals.css";
import Link from "next/link";
import MenuBar from "@/components/menuBar";
import PopUpWindows from "@/components/popUp";
import StoreProvider from "./StoreProvider";
import LogedUser from "@/components/logedUser";
// import { appWithTranslation } from "next-i18next";

export const metadata = {
  title: "DashGame",
  description: "Develop your game shop",
};

function RootLayout({ children }) {
  return (
    <StoreProvider>
      <html lang="en">
        <body style={{ overflow: "hidden" }}>
          <div className="container">
            <PopUpWindows />
            <div className={`menu ${styles.menu}`}>
              <div className={`dashboardString ${styles.dashboardString}`}>
                <div className="flex w-full justify-between ">
                  <div className="left-1">
                    <Link href="/">DashGame</Link>
                  </div>
                  <div className="mt-3">
                    <LogedUser />
                  </div>
                </div>
              </div>
              <MenuBar />
              {children}
            </div>
          </div>

          <div
            className={`background-container ${styles.backgroundContainer}`}
            style={{ backgroundColor: "#ffe1b5" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1728"
              height="1060"
              viewBox="0 0 1728 1060"
              fill="none"
              style={{
                transform: "translateY(300px)",
              }}
            >
              <path
                d="M333.846 121.232C-139.154 -120.268 -312 73.6376 -312 73.6376V678.638L472.846 572.732L1363.35 557.732H1961L1843.85 121.232C1843.85 121.232 1716.85 292.232 1606.85 362.732C1496.85 433.232 1463.65 495.043 1144 477.638C824.346 460.232 806.846 362.732 333.846 121.232Z"
                fill="#E48336"
              />
              <path
                d="M-362 254L-194.5 351.5L-210.532 386.2C-75.2036 481.376 146.843 589.456 439.5 567.5C946 529.5 994.5 508 1326.5 254C1658.5 0 2042 0 2042 0L1939.5 872.5L127 970L-340.5 667.5L-210.532 386.2C-309.416 316.655 -362 254 -362 254Z"
                fill="#B4231D"
              />
            </svg>
          </div>
        </body>
      </html>
    </StoreProvider>
  );
}

export default RootLayout;
