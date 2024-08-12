import clsx from "clsx";
import React from "react";
import { Container } from "./Container";
import Link from "next/link";

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={clsx(className, "")}>
      <Container className="h-10 flex  items-center py-11">
        <Link href={"/"}>
          <h1 className="text-2xl font-bold">
            <span className="text-primary">Cats</span>
            <span className="font-medium">And</span>
            <span className="text-secondary">Dogs</span>
          </h1>
        </Link>
      </Container>
    </header>
  );
};
