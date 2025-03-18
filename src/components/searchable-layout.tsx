import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

interface SearchableLayoutProps {
  children: React.ReactNode;
}

const SearchableLayout = ({ children }: SearchableLayoutProps) => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const q = router.query.q as string;

  useEffect(() => {
    setSearch(q || "");
  }, [q]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearchSubmit = () => {
    console.log("검색어:", search);
    if (!search || q === search) {
      return;
    }
    router.push(`/search?q=${search}`);
  };

  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearchSubmit();
    }
  };

  return (
    <div>
      <div className="flex items-center gap-1">
        <Input
          type="text"
          placeholder="검색어를 입력하세요."
          onKeyDown={onKeyDown}
          value={search}
          onChange={handleSearch}
        />
        <Button onClick={handleSearchSubmit}>검색</Button>
      </div>

      {children}
    </div>
  );
};

export default SearchableLayout;
