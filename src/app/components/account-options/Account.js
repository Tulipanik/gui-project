import Image from "next/image";

export default function Account({ accountName }) {
  return (
    <div>
      <Image src="/icon_person.svg" alt="Person Icon" width={40} height={40} />
      <span>Account</span>
    </div>
  );
}
