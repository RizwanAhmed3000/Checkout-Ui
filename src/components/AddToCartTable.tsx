"use client";
import Image from "next/image";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineFileUpload } from "react-icons/md";
import QuantityCounter from "./QuantityCounter";
import Link from "next/link";

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
      <div className="flex-1 w-full flex items-center justify-center gap-4">
        <RiDeleteBin6Line className="text-xl text-red-500 cursor-pointer" />
        <FaRegHeart className="text-xl cursor-pointer" />
        <MdOutlineFileUpload className="text-xl text-blue-600 cursor-pointer" />
      </div>
    </div>
  );
};

const AddToCartTable = () => {
  return (
    <div>
      <div className="bg-[white] shadow flex items-center py-3">
        <div className="flex-1 w-full text-center font-semibold">Product</div>
        <div className="flex-1 w-full text-center font-semibold">Price</div>
        <div className="flex-1 w-full text-center font-semibold">Quantity</div>
        <div className="flex-1 w-full text-center font-semibold">Subtotal</div>
        <div className="flex-1 w-full text-center font-semibold">Action</div>
      </div>
      <div>
        <CartItemComp />
        <CartItemComp />
        <CartItemComp />
        <CartItemComp />
      </div>

      <div className="">
        <p className="text-[12px] text-red-500 my-3">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
          omnis officiis sint dolorum rem. Deserunt suscipit magnam alias
          aliquid incidunt, excepturi placeat doloremque voluptas natus iure
          libero reiciendis odio quaerat!
        </p>
        <div className="flex items-center justify-between my-3 text-lg px-2">
          <span className="text-gray-600">Total Product Price</span>
          <span className="font-bold">$ 1600.00</span>
        </div>
        <div className="flex items-center justify-between my-3">
          <Link href={`/`}>
            <button className="border-gray-600 border py-2 px-5 rounded font-semibold">
              Return To Shop
            </button>
          </Link>
          <Link href={`/checkout`}>
            <button className="bg-[#0081fe] py-2 px-5 rounded font-semibold text-white">
              Proceed to checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddToCartTable;
