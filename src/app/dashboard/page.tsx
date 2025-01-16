"use client";

import BankCard from "@/components/common/BankCard/BankCard";
import Card from "@/components/common/Card/Card";
import TransactionCard from "@/components/common/TransactionCard/TransactionCard";
import { FaRegPaperPlane } from "react-icons/fa6";
import { Key, useEffect, useState } from "react";
import Button from "@/components/atoms/Button/Button";
import Input from "@/components/atoms/Input/Input";
import BankCardLoader from "@/components/common/BankCard/BankCardLoader";
import TransactionCardLoader from "@/components/common/TransactionCard/TransactionCardLoader";
import CardLoader from "@/components/common/Card/CardLoader";
import CardIcon from "@/components/atoms/CardIcon/CardIcon";
import CardSlider from "@/components/common/CardSlider/CardSlider";
import CardIconLoader from "@/components/atoms/CardIcon/CardIconLoader";
import ErrorBoundary from "@/components/common/ErrorBoundary/ErrorBoundary";
import dynamic from "next/dynamic";
import { useLazyGetQuickTransferQuery } from "@/store/slice/banking/bankingApiSlice";
import { isEmpty } from "@/utils/utils";
import { Endpoints } from "@/constants/endpoint";
const BarChart = dynamic(() => import('@/components/common/BarChart/BarChart'), {
  loading: () => <CardLoader />,
  ssr: false,
});
const LineChartGradient = dynamic(() => import('@/components/common/LineChart/LineChart'), {
  loading: () => <CardLoader />,
  ssr: false,
});
const PieChart = dynamic(() => import('@/components/common/PieChart/PieChart'), {
  loading: () => <CardLoader />,
  ssr: false,
});

interface TransactionHistoryProps {
  id: number;
  icon: string;
  text: string;
  createdAt: string;
  type: string;
  currency: string;
  amount: string;
}

interface BankCardProps {
  id: number;
  balance: string;
  currency: string;
  name: string;
  expiry: string;
  number: string;
}

interface ExpenseStatisticsProps {
  values: Array<number>;
  labels: Array<string>;
}

interface WeeklyActivityProps {
  withdraw: Array<number>;
  deposit: Array<number>;
  week: Array<string>;
  labels: Array<string>;
}

interface BalanceHistoryProps {
  values: Array<number>;
  labels: Array<string>;
}

const expenseStatistics:ExpenseStatisticsProps = {
  values: [20, 30, 15, 35],
  labels: ["Investment", "Entertainment", "Bill Expense", "Others"],
};
const weeklyActivityData:WeeklyActivityProps = {
  withdraw: [65, 59, 80, 81, 56, 55, 130],
  deposit: [60, 80, 70, 81, 56, 55, 0],
  week: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Friday"],
  labels: ["Withdraw", "Deposit"],
}
const balanceHistoryData:BalanceHistoryProps = {
  values: [33, 53, 85, 41, 44, 65],
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
};


const Dashboard = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [hydrated, setHydrated] = useState(false);
  const [bankCard, setBankCards] = useState<BankCardProps[]>([]);
  const [transactionsHistory, setTransactionHistory] = useState<TransactionHistoryProps[]>([]);
  const [quickTransferData, setQuickTransferData] = useState();

  const [getQuickTransfer] = useLazyGetQuickTransferQuery();

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

  const fetchBankCardDetails = async () => {
    try {
      const resp = await fetch(Endpoints.bankCards)
      const data = await resp.json()
      setBankCards(data?.data)
    } catch (e) {
      if (e.name === 'AbortError') {
        console.log('Fetch aborted');
      } else {
        console.error('Global fetch error:', e.message);
      }
      throw e;
    }
  }

  const fetchTransactionDetails = async () => {
    try {
      const resp = await fetch(Endpoints.transactionhistory)
      const data = await resp.json()
      setTransactionHistory(data?.data)
    } catch (e) {
      if (e.name === 'AbortError') {
        console.log('Fetch aborted');
      } else {
        console.error('Global fetch error:', e.message);
      }
      throw e;
    }
  }

  useEffect(() => {
    fetchBankCardDetails();
    fetchTransactionDetails();
    setHydrated(true);
    // on unMount: clean up
    return () => {
    }
  }, []);

  useEffect(() => {
    const fetchQuickTransfer = async() => {
      try {
        const resp = await getQuickTransfer({}).unwrap();
        if(resp?.status === 200){
          setQuickTransferData(resp?.data)
        }
      } catch (e) {
        if (e.name === 'AbortError') {
          console.log('Fetch aborted');
        } else {
          console.error('Global fetch error:', e.message);
        }
        throw e;
      }
    }
    fetchQuickTransfer();
  }, [getQuickTransfer])

  if (!hydrated) return null;

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
              {bankCard?.length > 0 ? (
                bankCard?.map((card, i) => (
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
                {transactionsHistory?.length > 0 ? (
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
              fallback={<div>Unable to fetch weekly activity</div>}
            >
              {weeklyActivityData && !isEmpty(weeklyActivityData) && <BarChart data={weeklyActivityData} />}
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
              {expenseStatistics && !isEmpty(expenseStatistics) && <PieChart data={expenseStatistics} />}
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
                {quickTransferData && !isEmpty(quickTransferData) ? <CardSlider
                  currentIndex={currentIndex}
                  handlePrev={handlePrev}
                  handleNext={handleNext}
                  dataLength={quickTransferData?.length}
                >
                  {quickTransferData?.map((user, i: Key | null | undefined) => (
                    <CardIcon
                      i={i}
                      key={i}
                      currentIndex={currentIndex}
                      {...user}
                    />
                  ))
                  }
                </CardSlider> : (
                  <CardIconLoader />
                )}

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
              {balanceHistoryData && !isEmpty(balanceHistoryData) && 
                <LineChartGradient data={balanceHistoryData} />
              }
            </ErrorBoundary>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
