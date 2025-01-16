"use client";

import React, { ReactNode } from "react";

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
