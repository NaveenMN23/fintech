import moment from "moment";
import Image from "next/image";

interface TransactionCardProps {
    id:number,
    text:string,
    createdAt:string,
    type:string,
    currency:string,
    amount:string
}

const TransactionCard:React.FC<TransactionCardProps> = ({id,text,createdAt,type,currency,amount}) => {
    return(
        <div key={id} className="flex gap-2 w-full justify-between">
            <Image src={'/recent/walletcard.svg'} alt="WC" width={50} height={50}/>
            <div className="flex flex-col gap-1">
                <span className="text-appBlack text-[0.8rem] md:text-[0.85rem] lg:text-[0.9rem] xl:text-[1rem]">{text}</span>
                <span className="text-appSubBlue text-[0.75rem] md:text-[0.8rem] lg:text-[0.85rem] xl:text-[0.95rem]">{moment(createdAt).format('DD MMMM YYYY')}</span>
            </div>
            <div className={`text-[0.75rem] md:text-[0.8rem] lg:text-[0.85rem] xl:text-[0.95rem] flex items-center ${type === 'debit' ? 'text-appRed' : 'text-appGreen'}`}>{`${(type === 'debit' ? '-' : '+')}${currency}${parseInt(amount).toLocaleString('US')}`}</div>
        </div>
    )
}

export default TransactionCard;