import { NextResponse } from "next/server";

export async function GET() {
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
    },
  ];

  return NextResponse.json({
    status: 200,
    message: "Successfully fetched the data",
    data: cards,
  });
}
