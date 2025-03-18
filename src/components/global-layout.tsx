import Link from "next/link";
import { ReactNode } from "react";

interface GlobalLayoutProps {
  children: ReactNode;
}

const GlobalLayout = ({ children }: GlobalLayoutProps) => {
  return (
    <>
      <header className="p-4 border-b mb-4">
        <h1 className="text-center">
          <Link href={"/"} className="text-blue-600 hover:text-blue-800">
            Kwak.books
          </Link>
        </h1>
      </header>

      <main className="container mx-auto px-4 min-h-screen">{children}</main>

      <footer className="p-4 border-t mt-8 text-center text-gray-500 text-sm">
        ⓒ 2025 miss-gif. All Rights Reserved.
      </footer>
    </>
  );
};

export default GlobalLayout;
