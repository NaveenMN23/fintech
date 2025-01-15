"use client";

import React, { ReactNode } from "react";

// interface CardProps {
//   image?: string;
//   title: string;
//   description?: string;
//   footer?: ReactNode;
//   onClick?: () => void;
// }

// const Card: React.FC<CardProps> = ({ image, title, description, footer, onClick }) => {
//   return (
//     <div
//       className="card bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
//       onClick={onClick}
//     >
//       {image && <img src={image} alt={title} className="w-full h-40 object-cover rounded-t-lg" />}
//       <div className="p-4">
//         <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
//         {description && <p className="text-gray-600 mt-2">{description}</p>}
//       </div>
//       {footer && (
//         <div className="p-4 bg-gray-100 rounded-b-lg">
//           {footer}
//         </div>
//       )}
//     </div>
//   );
// };

interface CardProps {
    className?: string,
    children: ReactNode
  }
  
  const Card: React.FC<CardProps> = ({className, children}) => {
    return (
      <div
        className={`rounded-3xl ${className || 'bg-appWhite'}`}
      >
        {children}
      </div>
    );
  };

export default Card;
