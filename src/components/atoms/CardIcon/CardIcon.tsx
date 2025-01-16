import Image from "next/image";

interface CardIconProps {
    picture: string,
    name: string,
    designation: string,
    id: number,
    i: number,
    currentIndex: number
}

const CardIcon:React.FC<CardIconProps> = ({i, id, picture, name, designation, currentIndex}) => {
    return(
        <div key={id} className={`flex flex-col p[1%] min-w-[6rem]`}>
            <Image src={picture} alt={name[0]} width={70} height={70} className="flex items-center justify-center w-auto" aria-label={`${name}, ${designation}`}/>
            <span className={`flex items-center justify-center w-auto text-[1rem] text-appBlack overflow-hidden text-ellipsis  whitespace-nowrap ${i === currentIndex ? "font-bold" : "font-normal"}`}>{name?.slice(0,15)}</span>
            <span className={`flex items-center justify-center w-auto text-[0.95rem] text-appSubBlue overflow-hidden text-ellipsis  whitespace-nowrap ${i === currentIndex ? "font-bold" : "font-normal"}`}>{designation?.slice(0,15)}</span>
        </div>
    )
}

export default CardIcon;