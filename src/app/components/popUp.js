"use client";

import Menu from "./account-options/menu";
import MainOptions from "./account-options/mainWindow";
import ChangePassword from "./account-options/changePassword";
import EditRelatedAccount from "./account-options/editReleatedAccount";
import AddRelatedAccount from "./account-options/addRelatedAccount";
import ChangeAccountInfo from "./account-options/changeAccountInfo";
import DeleteRelatedAccount from "./account-options/deleteReleatedAccount";
import { useSelector } from "react-redux";

export default function PopUpWindows() {
  const toVisible = useSelector((state) => state.windows);
  return (
    <>
      <Menu />
      {/* <MainOptions /> */}
      {/* <ChangePassword />
      <EditRelatedAccount />
      <AddRelatedAccount />
      <ChangeAccountInfo /> */}
      {/* <DeleteRelatedAccount /> */}
    </>
  );
}
