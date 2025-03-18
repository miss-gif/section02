import SearchableLayout from "@/components/searchable-layout";
import React, { ReactNode } from "react";

const Home = () => {
  return <div></div>;
};

export default Home;

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
