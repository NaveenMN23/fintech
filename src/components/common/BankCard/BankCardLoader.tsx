const BankCardLoader = () => {
  return (
    <>
      <div className="flex h-full flex-col animate-pulse">
        <div className="p-6 flex justify-between">
          <div>
            <div className="h-2 w-16 bg-gray-300 rounded"></div>{" "}
            {/* Balance Label */}
            <div className="h-4 w-28 bg-gray-300 rounded mt-2"></div>{" "}
            {/* Balance Value */}
          </div>
          <div className="h-8 w-8 bg-gray-300 rounded-full"></div> {/* Chip */}
        </div>
        <div className="px-6 pb-6 flex justify-start gap-10">
          <div>
            <div className="h-2 w-20 bg-gray-300 rounded"></div>{" "}
            {/* Card Holder Label */}
            <div className="h-4 w-24 bg-gray-300 rounded mt-2"></div>{" "}
            {/* Card Holder Value */}
          </div>
          <div>
            <div className="h-2 w-20 bg-gray-300 rounded"></div>{" "}
            {/* Valid Thru Label */}
            <div className="h-4 w-16 bg-gray-300 rounded mt-2"></div>{" "}
            {/* Valid Thru Value */}
          </div>
        </div>
        <div className="h-px bg-gray-200"></div> {/* Divider */}
        <div className="p-6 pt-7 rounded-b-3xl bg-gray-100">
          <div className="flex justify-between">
            <div className="h-4 w-36 bg-gray-300 rounded"></div>{" "}
            {/* Card Number */}
            <div className="h-8 w-8 bg-gray-300 rounded-full"></div>{" "}
            {/* Mastercard Logo */}
          </div>
        </div>
      </div>
    </>
  );
};

export default BankCardLoader;
