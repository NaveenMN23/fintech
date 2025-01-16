"use client";

import BankCard from "@/components/common/BankCard/BankCard";
import BarChart from "@/components/common/BarChart/BarChart";
import LineChartGradient from "@/components/common/LineChart/LineChart";
import Card from "@/components/common/Card/Card";
import Image from "next/image";
import TransactionCard from "@/components/common/TransactionCard/TransactionCard";
import { FaRegPaperPlane } from "react-icons/fa6";
import { useState } from "react";
import PieChart from "@/components/common/PieChart/PieChart";
import Button from "@/components/atoms/Button/Button";
import Input from "@/components/atoms/Input/Input";
import BankCardLoader from "@/components/common/BankCard/BankCardLoader";
import TransactionCardLoader from "@/components/common/TransactionCard/TransactionCardLoader";
import CardLoader from "@/components/common/Card/CardLoader";
import CardIcon from "@/components/atoms/CardIcon/CardIcon";
import CardSlider from "@/components/common/CardSlider/CardSlider";
import CardIconLoader from "@/components/atoms/CardIcon/CardIconLoader";
import ErrorBoundary from "@/components/common/ErrorBoundary/ErrorBoundary";

const cards = [
  {
    id: 1,
    balance: "5756",
    currency: "$",
    name: "Eddy Cusuma",
    expiry: "12/22",
    number: "3778 9080 3040 1234",
  },
  {
    id: 2,
    balance: "5756",
    currency: "$",
    name: "Eddy Cusuma",
    expiry: "12/22",
    number: "3778 9080 3040 1234",
  }
];

const transactionsHistory = [
  {
    id: 1,
    icon: (
      <Image src={"/recent/walletcard.svg"} alt="WC" height={25} width={25} />
    ),
    text: "Some Transaction",
    createdAt: "2021-01-28",
    type: "debit",
    currency: "$",
    amount: "850",
  },
  {
    id: 2,
    icon: (
      <Image src={"/recent/walletcard.svg"} alt="WC" height={25} width={25} />
    ),
    text: "Some Transaction",
    createdAt: "2021-01-28",
    type: "credit",
    currency: "$",
    amount: "850",
  },
  {
    id: 3,
    icon: (
      <Image src={"/recent/walletcard.svg"} alt="WC" height={25} width={25} />
    ),
    text: "Some Transaction",
    createdAt: "2021-01-28",
    type: "debit",
    currency: "$",
    amount: "850",
  },
  {
    id: 4,
    icon: (
      <Image src={"/recent/walletcard.svg"} alt="WC" height={25} width={25} />
    ),
    text: "Some Transaction",
    createdAt: "2021-01-28",
    type: "debit",
    currency: "$",
    amount: "850",
  },
];

const barData = {
  withdraw: [65, 59, 80, 81, 56, 55, 130],
  deposit: [60, 80, 70, 81, 56, 55, 0],
  week: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Friday"],
  labels: ["Withdraw", "Deposit"],
};

const pieData = {
  values: [20, 30, 15, 35],
  labels: ["Investment", "Entertainment", "Bill Expense", "Others"],
};

const lineChartData = {
  values: [33, 53, 85, 41, 44, 65],
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
};

const quickTransfer = [
  {
    picture: "/users/liviabator.svg",
    name: "Livia Bator",
    designation: "CEO",
    id: 1,
  },
  {
    picture: "/users/liviabator.svg",
    name: "Randy Press",
    designation: "Director",
    id: 2,
  },
  {
    picture: "/users/liviabator.svg",
    name: "Workman",
    designation: "Designer",
    id: 3,
  },
  {
    picture: "/users/liviabator.svg",
    name: "Workman",
    designation: "Designer",
    id: 4,
  },
];

const Dashboard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex: number) => prevIndex + 1);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex: number) => prevIndex - 1);
  };

  const [amount, setAmount] = useState(0);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    setAmount(isNaN(value) ? 0 : value);
  };

  const handleSend = (amount: number) => {
    console.log(amount);
  };

  return (
    <div className="flex flex-col gap-[2rem]" aria-live="polite">
      <div className={`grid grid-cols-1 md:grid-cols-3 gap-4`}>
        <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
          <div className="flex justify-between items-baseline">
            <header className="text-appGray text-fssubheading font-semibold">
              My Cards
            </header>
            <div className="text-[1rem] text-appGray font-semibold hover:scale-105 cursor-pointer">
              See All
            </div>
          </div>
          <ErrorBoundary fallback={<div>Unable to fetch cards</div>}>
            <div className="flex overflow-auto gap-[2rem]" aria-live="polite">
              {cards ? (
                cards?.map((card, i) => (
                  <Card
                    key={card.id}
                    className={`min-w-[22rem] h-[15rem] md:flex-row md:h-[15rem] rounded-3xl gap-y-8 flex-col ${i % 2 === 0 ? "bg-gradient-to-r from-cardDark to-[#0E0E11] border-cardDarkBorder border-1 text-appWhite" : "bg-cardLight border-cardLightBorder border-1 text-appGray"}`}
                    aria-labelledby={`card-${card.id}-header`}
                  >
                    <BankCard index={i} {...card}></BankCard>
                  </Card>
                ))
              ) : (
                <BankCardLoader />
              )}
            </div>
          </ErrorBoundary>
        </div>
        <div className="col-span-1 flex flex-col gap-4">
          <header className="text-appGray text-fssubheading font-semibold">
            Recent Transaction
          </header>
          <ErrorBoundary
            fallback={<div>Unable to fetch recent transaction</div>}
          >
            <Card className="p-6 overflow-auto bg-appWhite h-[15rem] md:h-[15rem]">
              <div className="flex flex-col gap-3">
                {transactionsHistory ? (
                  transactionsHistory?.map((transaction, i) => (
                    <TransactionCard
                      key={transaction.id}
                      {...transaction}
                      aria-label={`Transaction ${i + 1}: ${transaction.type} of ${transaction.amount} ${transaction.currency}`}
                    />
                  ))
                ) : (
                  <TransactionCardLoader />
                )}
              </div>
            </Card>
          </ErrorBoundary>
        </div>
      </div>
      <div className={`grid grid-cols-1 md:grid-cols-3 gap-4`}>
        <div
          className="col-span-1 md:col-span-2 flex flex-col gap-4"
          aria-labelledby="weekly-activity"
        >
          <header className="text-appGray text-fssubheading font-semibold">
            Weekly Activity
          </header>

          <Card
            className="p-6 overflow-auto bg-appWhite h-[17rem] md:h-[17rem]"
            aria-label="Weekly activity chart"
          >
            <ErrorBoundary
              fallback={<div>Unable to fetch weekly actiivty</div>}
            >
              {barData ? <BarChart data={barData} /> : <CardLoader />}
            </ErrorBoundary>
          </Card>
        </div>
        <div
          className="col-span-1 flex flex-col gap-4"
          aria-labelledby="expense-statistics"
        >
          <header className="text-appGray text-fssubheading font-semibold">
            Expense Statistics
          </header>
          <Card
            className="p-6 overflow-auto bg-appWhite h-[17rem] md:h-[17rem]"
            aria-label="Expense statistics pie chart"
          >
            <ErrorBoundary
              fallback={<div>Unable to fetch expense statistics</div>}
            >
              {pieData ? <PieChart data={pieData} /> : <CardLoader />}
            </ErrorBoundary>
          </Card>
        </div>
      </div>
      <div className={`grid grid-cols-1 md:grid-cols-3 gap-4`}>
        <div className="col-span-1 flex flex-col gap-4">
          <header className="text-appGray text-fssubheading font-semibold">
            Quick Transfer
          </header>
          <Card
            className="p-6 overflow-auto bg-appWhite h-[17rem] md:h-[17rem]"
            aria-labelledby="quick-transfer"
          >
            <ErrorBoundary fallback={<div>Unable to fetch Quick Transfer</div>}>
              <div className="flex flex-col gap-5">
                <CardSlider
                  currentIndex={currentIndex}
                  handlePrev={handlePrev}
                  handleNext={handleNext}
                  quickTransfer={quickTransfer}
                >
                  {quickTransfer ? (
                    quickTransfer?.map((user, i) => (
                      <CardIcon
                        i={i}
                        key={i}
                        currentIndex={currentIndex}
                        {...user}
                      />
                    ))
                  ) : (
                    <CardIconLoader />
                  )}
                </CardSlider>

                <div className="flex gap-5 items-center">
                  <span className="text-[1rem] text-appSubBlue">
                    Write Amount
                  </span>
                  <Input
                    type="number"
                    className="flex-1 bg-appInputGray text-appSubBlue rounded-full w-10 p-3"
                    id={"amount"}
                    name={"amount"}
                    value={amount}
                    onChange={handleChange}
                    min={1}
                    max={100000}
                    aria-labelledby="amount-label"
                  />
                  <div className="-ml-20 flex-1">
                    <Button
                      className="rounded-full"
                      onClick={() => {
                        handleSend(amount);
                      }}
                      aria-label="Send transfer"
                    >
                      <span className="flex flex-row gap-3 px-2">
                        <span className="visible">Send</span>{" "}
                        <FaRegPaperPlane size={25} />
                      </span>
                    </Button>
                  </div>
                </div>
              </div>
            </ErrorBoundary>
          </Card>
        </div>
        <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
          <header className="text-appGray text-fssubheading font-semibold">
            Balance History
          </header>
          <Card className="p-6 overflow-auto bg-appWhite h-[17rem] md:h-[17rem]">
            <ErrorBoundary
              fallback={<div>Unable to fetch balance history</div>}
            >
              {lineChartData ? (
                <LineChartGradient data={lineChartData} />
              ) : (
                <CardLoader />
              )}
            </ErrorBoundary>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
