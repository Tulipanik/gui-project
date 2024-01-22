import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

export default function AccountName({ accountName }) {
  return (
    <div>
      <AccountCircleOutlinedIcon />
      <div className="inline-block pl-2 pr-10 text-lg">{accountName}</div>
    </div>
  );
}
