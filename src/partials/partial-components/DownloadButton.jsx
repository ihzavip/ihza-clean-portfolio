import React from "react";
export const DownloadButton = ({ btnName }) => {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("ihza-webdeveloper.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "ihza-webdeveloper.pdf";
        alink.click();
      });
    });
  };
  return (
    <>
      <button
        onClick={onButtonClick}
        type="button"
        className="border-[#626262] border-[1px] h-10 w-36 px-4 py-2 rounded tracking-[3px] bg-transparent font-semibold hover:border-[#fff8aa] hover:bg-[#fff8aa14] text-white hover:text-[#fff8aa]"
      >
        <div className="flex gap-1 justify-center">
          <p>{btnName}</p>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path d="M7 3.5A1.5 1.5 0 018.5 2h3.879a1.5 1.5 0 011.06.44l3.122 3.12A1.5 1.5 0 0117 6.622V12.5a1.5 1.5 0 01-1.5 1.5h-1v-3.379a3 3 0 00-.879-2.121L10.5 5.379A3 3 0 008.379 4.5H7v-1z" />
            <path d="M4.5 6A1.5 1.5 0 003 7.5v9A1.5 1.5 0 004.5 18h7a1.5 1.5 0 001.5-1.5v-5.879a1.5 1.5 0 00-.44-1.06L9.44 6.439A1.5 1.5 0 008.378 6H4.5z" />
          </svg>
        </div>
      </button>
    </>
  );
};
