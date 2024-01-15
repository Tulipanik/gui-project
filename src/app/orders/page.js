import OrderTable from "../components/orderTable";
import MenuSimple from "../components/sales-chart/dropdown";
export default function Orders() {
  return (
    <div>
      <div className="mx-auto w-4/5">
        Count of orders: <span></span>
        <MenuSimple options={["paid", "unpaid"]} />
      </div>
      <OrderTable />
    </div>
  );
}
