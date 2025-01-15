"use client";

import BankCard from "@/components/common/BankCard/BankCard";
import BarChart from "@/components/common/BarChart/BarChart";
import LineChartGradient from "@/components/common/LineChart/LineChart";
import Card from "@/components/common/Card/Card";
import moment from "moment";
import Image from "next/image";
import TransactionCard from "@/components/common/TransactionCard/TransactionCard";
import { FaRegPaperPlane } from "react-icons/fa6";
import { useState } from "react";
import PolarAreaChart from "@/components/common/PolarAreaChart/PolarAreaChart";
import PieChart from "@/components/common/PieChart/PieChart";

const cards = [{
  id: 1,
  balance: '5756',
  currency: '$',
  name: 'Eddy Cusuma',
  expiry: '12/22',
  number: '3778 9080 3040 1234'
}, {
  id: 2,
  balance: '5756',
  currency: '$',
  name: 'Eddy Cusuma',
  expiry: '12/22',
  number: '3778 9080 3040 1234'
}]

const transactionsHistory = [{
  id:1,
  icon: <Image src={'/recent/walletcard.svg'} alt="WC" height={25} width={25}/> ,
  text: 'Some Transaction',
  createdAt: '2021-01-28',
  type:'debit',
  currency:'$',
  amount: '850'
},{
    id:2,
    icon: <Image src={'/recent/walletcard.svg'} alt="WC" height={25} width={25}/> ,
    text: 'Some Transaction',
    createdAt: '2021-01-28',
    type:'credit',
    currency:'$',
    amount: '850'
  },{
    id:3,
    icon: <Image src={'/recent/walletcard.svg'} alt="WC" height={25} width={25}/> ,
    text: 'Some Transaction',
    createdAt: '2021-01-28',
    type:'debit',
    currency:'$',
    amount: '850'
  },{
    id:4,
    icon: <Image src={'/recent/walletcard.svg'} alt="WC" height={25} width={25}/> ,
    text: 'Some Transaction',
    createdAt: '2021-01-28',
    type:'debit',
    currency:'$',
    amount: '850'
  }]

  const barData = {
    withdraw: [65, 59, 80, 81, 56, 55, 130],
    deposit: [60, 80, 70, 81, 56, 55, 0],
    week: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Friday'],
    labels:['Withdraw','Deposit']
  }

  const quickTransfer = [{
    picture: '/users/liviabator.svg',
    name: 'Livia Bator',
    designation: 'CEO',
    id:1
  },{
    picture: '/users/liviabator.svg',
    name: 'Randy Press',
    designation: 'Director',
    id:2
  },{
    picture: '/users/liviabator.svg',
    name: 'Workman',
    designation: 'Designer',
    id:3
  },{
    picture: '/users/liviabator.svg',
    name: 'Workman',
    designation: 'Designer',
    id:4
  }]

const Dashboard = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        console.log(quickTransfer.length,currentIndex)
        setCurrentIndex((prevIndex: number) => prevIndex + 1);
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex: number) => prevIndex - 1);
    }

    return(
        <div className="flex flex-col gap-[2rem]">
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-4`}>
                <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
                    <div className="flex justify-between">
                        <header className="text-appGray text-fssubheading font-semibold">My Cards</header>
                        <div className="text-[1rem] text-appGray font-semibold">See All</div>
                    </div>
                    <div className="flex overflow-auto gap-[2rem]">
                        {cards.map((card, i) => (
                            <Card key={card.id} className={`min-w-[21rem] h-[13rem] md:flex-row md:h-[15rem] rounded-3xl gap-y-8 flex-col ${i % 2 === 0 ? "bg-gradient-to-r from-cardDark to-[#0E0E11] border-cardDarkBorder border-1 text-appWhite" : "bg-cardLight border-cardLightBorder border-1 text-appGray"}`}>
                                <BankCard index={i} {...card}></BankCard>
                            </Card>
                        ))}
                    </div>
                </div>
                <div className="col-span-1 flex flex-col gap-4">
                    <header className="text-appGray text-fssubheading font-semibold">Recent Transaction</header>
                    <Card className="p-6 overflow-auto bg-appWhite h-[13rem] md:h-[15rem]">
                        <div className="flex flex-col gap-3">
                            {transactionsHistory.map((transaction, i) => (
                                <TransactionCard key={transaction.id} {...transaction}/>
                            ))}
                        </div>
                    </Card>
                </div>
            </div>
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-4`}>
                <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
                    <header className="text-appGray text-fssubheading font-semibold">Weekly Activity</header>
                    <Card className="p-6 overflow-auto bg-appWhite h-[14rem] md:h-[17rem]">
                        <BarChart data={barData}/>
                    </Card>
                </div>
                <div className="col-span-1 flex flex-col gap-4">
                    <header className="text-appGray text-fssubheading font-semibold">Expense Statistics</header>
                    <Card className="p-6 overflow-auto bg-appWhite h-[14rem] md:h-[17rem]">
                        <PieChart/>
                    </Card>
                </div>
            </div>
            <div className={`grid grid-cols-1 md:grid-cols-3 gap-4`}>
                <div className="col-span-1 flex flex-col gap-4">
                    <header className="text-appGray text-fssubheading font-semibold">Quick Transfer</header>
                    <Card className="p-6 overflow-auto bg-appWhite h-[14rem] md:h-[17rem]">
                        <div className="flex flex-col gap-5">
                            <div className="flex items-center justify-between">
                                <button className={`flex justify-start p-2 w-10 h-10 rounded-full text-appSubBlue box-shadow: 4px 4px 18px -2px #E7E4E8CC cursor-pointer  ${currentIndex > 0 ? "visible" : "invisible"}`} onClick={handlePrev}>&lt;</button>
                                <div className="relative w-full overflow-hidden">
                                    <div
                                    className="flex gap-5 transition-transform duration-500"
                                    style={{ transform: `translateX(-${currentIndex * 41}%)` }}
                                    >
                                        {quickTransfer.map((user,i) => (
                                            <div key={user?.id} className={`flex flex-col p[1%] min-w-[35%]`}>
                                                <Image src={user.picture} alt={user?.name[0]} width={70} height={70} className="flex items-center justify-center w-auto"/>
                                                <span className={`flex items-center justify-center w-auto text-[1rem] text-appBlack overflow-hidden text-ellipsis  whitespace-nowrap ${i === currentIndex ? "font-bold" : "font-normal"}`}>{user?.name?.slice(0,15)}</span>
                                                <span className={`flex items-center justify-center w-auto text-[0.95rem] text-appSubBlue overflow-hidden text-ellipsis  whitespace-nowrap ${i === currentIndex ? "font-bold" : "font-normal"}`}>{user?.designation?.slice(0,15)}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <button className={`flex justify-end p-2 w-10 h-10 rounded-full text-appSubBlue box-shadow: 4px 4px 18px -2px #E7E4E8CC cursor-pointer ${currentIndex < quickTransfer.length - 1 ? "visible" : "invisible"}`}onClick={handleNext}>&gt;</button>
                            </div>
                            
                            <div className="flex gap-5 items-center">
                                <span className="text-[1rem] text-appSubBlue flex-3">Write Amount</span>
                                <input type="number" className="flex-1 bg-appInputGray text-appSubBlue rounded-full w-10 p-3"></input>
                                <div className="-ml-20 flex-1">
                                    <button type="submit" className="rounded-full p-3 bg-appBlack text-appWhite w10">
                                        <span className="flex flex-row gap-3 px-2">
                                            Send <FaRegPaperPlane size={25}/>
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>
                <div className="col-span-1 md:col-span-2 flex flex-col gap-4">
                    <header className="text-appGray text-fssubheading font-semibold">Balance History</header>
                    <Card className="p-6 overflow-auto bg-appWhite h-[14rem] md:h-[17rem]">
                        <LineChartGradient />
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;