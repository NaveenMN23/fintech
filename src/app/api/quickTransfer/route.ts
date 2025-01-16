import { NextResponse } from 'next/server';



export async function GET() {

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

  return NextResponse.json({status:200, message:'Successfully fetched the data', data:quickTransfer});
}
