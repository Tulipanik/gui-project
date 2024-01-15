export default function OrderTable() {
  return (
    <table className="mx-auto w-4/5 border-2 border-solid border-orange-400 text-left">
      <thead className="bg-orange-200">
        <th className="border-solid border-2 border-orange-400 py-2 font-thin">
          Nr.
        </th>
        <th className="border-solid border-2 border-orange-400 font-thin">
          Order Id
        </th>
        <th className="border-solid border-2 border-orange-400 font-thin">
          Date of order
        </th>
        <th className="border-solid border-2 border-orange-400 font-thin">
          Status
        </th>
      </thead>
      <tb className="h-4/5"></tb>
    </table>
  );
}
