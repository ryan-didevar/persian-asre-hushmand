"use client";
import { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { AiOutlineMinusCircle } from "react-icons/ai";
const Accordion = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <details className="mb-4 border border-gray-100 rounded-lg p-4 bg-white-2">
      <summary className="flex items-center font-bold text-black-900 text-lg mb-2 cursor-pointer list-none justify-between">
        <span className="text-base font-bold text-black-900">
          مراحل طراحی وب سایت چیست؟
        </span>
        <div className="mt-1.5">
          {open ? (
            <AiOutlineMinusCircle size={24} onClick={() => setOpen(false)} />
          ) : (
            <IoIosAddCircleOutline size={24} onClick={() => setOpen(true)} />
          )}
        </div>
      </summary>
      <p className="text-xs text-black-500 font-medium mb-4">
        مراحل طراحی وب سایت شامل تحلیل نیازها، طراحی رابط کاربری، توسعه فنی، تست
        و راه‌اندازی نهایی است.
      </p>
    </details>
  );
};

export default Accordion;
