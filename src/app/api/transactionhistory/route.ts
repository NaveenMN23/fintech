import { NextResponse } from 'next/server';



export async function GET() {

    const transactionsHistory = [
        {
          id: 1,
          icon: "<Image src={/recent/walletcard.svg} alt='WC' height={25} width={25} />",
          text: "Some Transaction",
          createdAt: "2021-01-28",
          type: "debit",
          currency: "$",
          amount: "850",
        },
        {
          id: 2,
          icon: "<Image src={/recent/walletcard.svg} alt='WC' height={25} width={25} />",
          text: "Some Transaction",
          createdAt: "2021-01-28",
          type: "credit",
          currency: "$",
          amount: "850",
        },
        {
          id: 3,
          icon: "<Image src={/recent/walletcard.svg} alt='WC' height={25} width={25} />",
          text: "Some Transaction",
          createdAt: "2021-01-28",
          type: "debit",
          currency: "$",
          amount: "850",
        },
        {
          id: 4,
          icon: "<Image src={/recent/walletcard.svg} alt='WC' height={25} width={25} />",
          text: "Some Transaction",
          createdAt: "2021-01-28",
          type: "debit",
          currency: "$",
          amount: "850",
        },
    ];

  return NextResponse.json({status:200, message:'Successfully fetched the data', data:transactionsHistory});
}
