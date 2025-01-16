"use client";

import React, { memo } from "react";

interface CardSliderProps {
  currentIndex: number;
  children: React.ReactNode;
  handlePrev: () => void;
  handleNext: () => void;
  quickTransfer: Array<object>;
}

const CardSlider: React.FC<CardSliderProps> = ({
  currentIndex,
  children,
  handlePrev,
  handleNext,
  quickTransfer,
}) => {
  return (
    <div className="flex items-center justify-between">
      <button
        className={`flex justify-start p-2 w-10 h-10 rounded-full text-appSubBlue box-shadow: 4px 4px 18px -2px #E7E4E8CC cursor-pointer  ${currentIndex > 0 ? "visible" : "invisible"}`}
        onClick={handlePrev}
        aria-label="Previous user"
      >
        &lt;
      </button>
      <div className="relative w-full overflow-hidden">
        <div
          className={`flex gap-5 transition-transform duration-500`}
          style={{ transform: `translateX(-${currentIndex * 7}rem)` }}
          aria-live="polite"
        >
          {children}
        </div>
      </div>
      <button
        className={`flex justify-end p-2 w-10 h-10 rounded-full text-appSubBlue box-shadow: 4px 4px 18px -2px #E7E4E8CC cursor-pointer ${currentIndex < quickTransfer.length - 1 ? "visible" : "invisible"}`}
        onClick={handleNext}
        aria-label="Next user"
      >
        &gt;
      </button>
    </div>
  );
};

export default memo(CardSlider);
