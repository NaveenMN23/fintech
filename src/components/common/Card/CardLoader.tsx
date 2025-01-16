"use client";

const CardLoader = ({ className }: { className?: string }) => {
  return (
    <div className={`rounded-3xl bg-gray-300 ${className || ""} animate-pulse`}>
      <div className="h-16 bg-gray-400 rounded-3xl"></div>
    </div>
  );
};

export default CardLoader;
