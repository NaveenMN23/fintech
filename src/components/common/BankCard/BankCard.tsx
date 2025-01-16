import Image from "next/image";

interface BankCardProps {
  index: number;
  id: number;
  balance: string;
  currency: string;
  name: string;
  expiry: string;
  number: string;
}

const BankCard: React.FC<BankCardProps> = ({
  index,
  id,
  balance,
  currency,
  name,
  expiry,
  number,
}) => {
  const maskCardNumber = (cardNumber: string) => {
    if (!cardNumber) return "";
    const cleanNumber = cardNumber.replace(/\D/g, ""); // Remove non-digit characters
    const formatted = cleanNumber.replace(/(\d{4})(?=\d)/g, "$1 "); // Add spaces every 4 digits
    return formatted.length < 16
      ? formatted
      : `${formatted.slice(0, 4)} **** **** ${formatted.slice(-4)}`; // Mask all but last 4 digits
  };

  return (
    <div className="flex h-full flex-col font-LatoFont" key={id}>
      <div className="p-6 flex justify-between">
        <div>
          <div className="text-[0.75rem] font-normal lg:text-[0.8rem]">
            Balance
          </div>
          <div className="text-[1.0rem] lg:text-[1.1rem] font-semibold">
            {currency + parseInt(balance).toLocaleString("US")}
          </div>
        </div>
        {index % 2 === 0 ? (
          <Image
            src={"/bankcard/lightchip.svg"}
            alt="chip"
            width={30}
            height={30}
          />
        ) : (
          <Image
            src={"/bankcard/darkchip.svg"}
            alt="chip"
            width={30}
            height={30}
          />
        )}
      </div>
      <div className="px-6 pb-6 flex justify-start gap-10">
        <div>
          <div className="text-[0.75rem] lg:text-[0.8rem] font-normal">
            {"Card Holder".toUpperCase()}
          </div>
          <div className="text-[0.9rem] lg:text-[0.95rem] font-semibold">
            {name}
          </div>
        </div>
        <div>
          <div className="text-[0.75rem] lg:text-[0.8rem] font-normal">
            {"Valid Thru".toUpperCase()}
          </div>
          <div className="text-[0.9rem] lg:text-[0.95rem] font-semibold">
            {expiry}
          </div>
        </div>
      </div>
      <div
        className={`h-px ${index % 2 !== 0 && "bg-cardLightBorder border-0"}`}
      ></div>
      <div
        className={`p-6 pt-7 rounded-b-3xl ${index % 2 === 0 && "bg-gradient-to-r from-[#666675] to-[#1B1B21]"}`}
      >
        <div className={`flex justify-between`}>
          <div className="text-[1.0rem] lg:text-[1.1rem] font-semibold">
            {maskCardNumber(number)}
          </div>
          {index % 2 === 0 ? (
            <Image
              src={"/bankcard/mastercard.svg"}
              alt="chip"
              width={30}
              height={30}
            />
          ) : (
            <Image
              src={"/bankcard/mastercarddark.svg"}
              alt="chip"
              width={30}
              height={30}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default BankCard;
