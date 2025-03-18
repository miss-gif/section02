import { TypoH1 } from "@/components/ui/typography";
import Link from "next/link";
import { ReactNode } from "react";

interface GlobalLayoutProps {
  children: ReactNode;
}

const GlobalLayout = ({ children }: GlobalLayoutProps) => {
  return (
    <>
      <header>
        <TypoH1>
          <Link href={"/"}>Kwak.books</Link>
        </TypoH1>
      </header>

      <main>{children}</main>

      <footer>ⓒ 2025 miss-gif. All Rights Reserved.</footer>
    </>
  );
};

export default GlobalLayout;
