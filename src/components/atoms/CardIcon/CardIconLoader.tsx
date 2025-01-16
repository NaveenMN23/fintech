"use client";

const CardIconLoader = () => {
    return (
      <div className="flex flex-col p-[1%] min-w-[6rem] animate-pulse">
        {/* Placeholder for Image */}
        <div className="flex items-center justify-center w-[70px] h-[70px] bg-gray-300 rounded-full"></div>
  
        {/* Placeholder for Name */}
        <div className="flex items-center justify-center w-[5rem] h-4 mt-2 bg-gray-300 rounded"></div>
  
        {/* Placeholder for Designation */}
        <div className="flex items-center justify-center w-[4.5rem] h-4 mt-1 bg-gray-300 rounded"></div>
      </div>
    );
  };
  
  export default CardIconLoader;
  