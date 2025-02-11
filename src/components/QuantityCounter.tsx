'use client'
import React, { useState } from 'react'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const QuantityCounter = () => {
  const [count, setCount] = useState<number>(1);
  
    const increment = () => setCount((prev) => prev + 1);
    const decrement = () => setCount((prev) => (prev > 1 ? prev - 1 : prev));
    return (
      <div className="flex items-center space-x-4">
        <button
          onClick={decrement}
          className="px-3 py-1 text-gray-700 rounded disabled:opacity-50"
          disabled={count === 1}
        >
          <FaMinus />
        </button>
        <span className="text-lg font-semibold">{count}</span>
        <button onClick={increment} className="px-3 py-1 text-gray-700 rounded ">
          <FaPlus />
        </button>
      </div>
    );
}

export default QuantityCounter