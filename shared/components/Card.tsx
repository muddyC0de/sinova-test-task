import clsx from "clsx";
import React from "react";

interface Props {
  imageUrl: string;
  title: string;
  isDog: boolean;
  className?: string;
}

export const Card: React.FC<Props> = ({
  title,
  imageUrl,
  isDog,
  className,
}) => {
  return (
    <div
      className={clsx(
        className,
        "rounded-3xl ring-1 cursor-pointer p-4 ring-gray-200 w-full height-[500px]",
        isDog ? "text-secondary" : "text-primary"
      )}
    >
      <img
        className="w-full h-[368px] object-cover rounded-lg mb-4"
        src={imageUrl}
        alt={title}
      />
      <h2 className="text-xl font-bold">{title}</h2>
    </div>
  );
};
