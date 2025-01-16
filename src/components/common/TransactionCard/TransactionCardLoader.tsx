const TransactionCardLoader = () => {
  return (
    <div className="flex gap-2 w-full justify-between animate-pulse">
      <div className="w-12 h-12 bg-gray-300 rounded-full"></div>
      <div className="flex flex-col gap-1 w-full">
        <div className="w-3/4 h-3 bg-gray-300 rounded"></div>
        <div className="w-1/2 h-3 bg-gray-300 rounded"></div>
      </div>
      <div className="w-1/3 h-3 bg-gray-300 rounded"></div>
    </div>
  );
};

export default TransactionCardLoader;
