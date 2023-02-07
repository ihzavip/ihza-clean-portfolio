import React from "react";

export const Button = ({ children, ngeKlik }) => {
  return (
    <>
      <button
        onClick={ngeKlik}
        type="button"
        className="h-10 w-36 px-4 py-2 text-white bg-transparent tracking-[3px] font-semibold border-[#626262] border-[1px] rounded hover:border-[#fff8aa] hover:bg-[#fff8aa14] hover:text-[#fff8aa] uppercase"
      >
        {children}
      </button>
    </>
  );
};
