import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { onminus, onplus } from "../../store/actions";
import "./Counter.css";

export default function Counter() {
  const state = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="container border-4 rounded-full w-80 h-80 flex justify-center items-center gap-4">
      <div class="group relative">
        <button
          onClick={() => dispatch(onplus())}
          className="w-8 hover:scale-125 duration-20 hover:text-blue-500"
        >
          +
        </button>
        <span
          class="absolute -top-14 left-[50%] -translate-x-[50%] 
  z-20 origin-left scale-0 px-3 rounded-lg border 
  border-gray-300 bg-white py-2 text-sm font-bold
  shadow-md transition-all duration-300 ease-in-out 
  group-hover:scale-100"
        >
          Plus<span></span>
        </span>
      </div>
      {state}
      <div class="group relative">
        <button
          onClick={() => dispatch(onminus())}
          className="w-8 hover:scale-125 duration-20 hover:text-red-500"
        >
          -
        </button>
        <span
          class="absolute -top-14 left-[50%] -translate-x-[50%] 
  z-20 origin-left scale-0 px-3 rounded-lg border 
  border-gray-300 bg-white py-2 text-sm font-bold
  shadow-md transition-all duration-300 ease-in-out 
  group-hover:scale-100"
        >
          Minus<span></span>
        </span>
      </div>
    </div>
  );
}
