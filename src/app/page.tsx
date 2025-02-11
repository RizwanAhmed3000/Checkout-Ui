import Image from "next/image";
import AddToCartTable from "../components/AddToCartTable";

export default function Home() {
  return (
    <div className="">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold">Add To Cart</h1>
        <div>search</div>
      </div>
      <div className="backContainer bg-[#f4f4f4] p-6 shadow-md">
        <AddToCartTable />
      </div>
    </div>
  );
}
