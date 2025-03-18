import SearchableLayout from "@/components/searchable-layout";
import { useRouter } from "next/router";
import React, { ReactNode } from "react";

const Page = () => {
  const router = useRouter();

  console.log(router);
  const { q } = router.query;

  return <div>Page {q}</div>;
};

export default Page;

Page.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
