"use client";

import moment from "moment";
import Image from "next/image";
import { memo } from "react";

interface TransactionCardProps {
  id: number;
  text: string;
  createdAt: string;
  type: string;
  currency: string;
  amount: string;
}

const TransactionCard: React.FC<TransactionCardProps> = ({
  id,
  text,
  createdAt,
  type,
  currency,
  amount,
}) => {
  return (
    <div key={id} className="flex gap-2 w-full justify-between">
      <Image src={"/recent/walletcard.svg"} alt="WC" width={50} height={50} />
      <div className="flex flex-col gap-1">
        <span className="text-appBlack text-[1rem]">{text}</span>
        <span className="text-appSubBlue text-[0.95rem]">
          {moment(createdAt).format("DD MMMM YYYY")}
        </span>
      </div>
      <div
        className={`text-[0.95rem] flex items-center ${type === "debit" ? "text-appRed" : "text-appGreen"}`}
      >{`${type === "debit" ? "-" : "+"}${currency}${parseInt(amount).toLocaleString("US")}`}</div>
    </div>
  );
};

export default memo(TransactionCard);
