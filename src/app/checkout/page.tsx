import QuantityCounter from "@/components/QuantityCounter";
import Image from "next/image";
import React from "react";

const CheckoutCalculationBox = () => {
  return (
    <div className="bg-[#f4f4f4] p-6 shadow-md">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between">
          <span className="text-gray-500">Product Price:</span>
          <span className="font-bold">$ 1600</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">VAT:</span>
          <span className="font-bold">$ 100</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-500">Shipping:</span>
          <span className="font-bold">$ 10</span>
        </div>
        <div className="w-full h-[1px] bg-gray-500"></div>
        <div className="flex justify-between">
          <span className="text-gray-500">Total:</span>
          <span className="font-bold">$ 1710</span>
        </div>
        <button className="bg-[#0081fe] py-2 px-5 w-full rounded font-semibold text-white">
          Checkout
        </button>
      </div>
    </div>
  );
};

const CartItemComp = () => {
  return (
    <div className="flex items-center py-4 my-4">
      <div className="flex-1 w-full flex items-center gap-4">
        <Image
          src={`/assets/img.jpg`}
          alt="product"
          width={80}
          height={80}
          objectFit="contain"
        />
        <div className="flex flex-col">
          <p>Product name</p>
          {/* text-brand-mute */}
          <p className="text-sm ">barcode</p>
        </div>
      </div>

      <div className="flex-1 w-full text-center">$ 500.00</div>
      <div className="flex-1 w-full text-center flex items-center justify-center">
        <QuantityCounter />
      </div>
      <div className="flex-1 w-full text-center">Subtotal</div>
    </div>
  );
};

const page = () => {
  return (
    <div>
      <div className="flex justify-center items-center mb-10">
        <h1 className="text-3xl font-bold">Checkout</h1>
      </div>
      <div className="backContainer bg-[#f4f4f4] p-6 shadow-md mb-5">
        <div>
          <div className="bg-[white] shadow flex items-center py-3">
            <div className="flex-1 w-full text-center font-semibold">
              Product
            </div>
            <div className="flex-1 w-full text-center font-semibold">Price</div>
            <div className="flex-1 w-full text-center font-semibold">
              Quantity
            </div>
            <div className="flex-1 w-full text-center font-semibold">
              Subtotal
            </div>
          </div>
          <div>
            <CartItemComp />
            <CartItemComp />
            <CartItemComp />
            <CartItemComp />
          </div>
        </div>
      </div>
      <CheckoutCalculationBox />
    </div>
  );
};

export default page;
