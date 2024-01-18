// src/components/Card.tsx
import React from "react";

interface CardProps {
  title: string;
  content: string;
  comment: string;
}

const Card: React.FC<CardProps> = ({ title, content, comment }) => {
  return (
    <div className=" custom-card w-1/4 h-1/3">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{content}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <p className="text-gray-700 text-base">{comment}</p>
      </div>
    </div>
  );
};

export default Card;
