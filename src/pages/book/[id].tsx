/* eslint-disable @typescript-eslint/no-unused-vars */
import fetchOneBooks from "@/lib/fetch-one-book";
import { GetServerSidePropsContext, InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { id: "1" } },
      { params: { id: "2" } },
      { params: { id: "3" } },
    ],
    fallback: true,
  };
};

export const getStaticProps = async (context: GetServerSidePropsContext) => {
  const id = context.params!.id;
  const book = await fetchOneBooks(Number(id));

  // 책이 없을 경우 404 페이지로 이동
  if (!book) {
    return { notFound: true };
  }

  return { props: { book } };
};

const Page = ({ book }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  if (!book) {
    return "문제가 발생했습니다. 다시 시도해주세요.";
  }

  const { id, title, subTitle, description, author, publisher, coverImgUrl } =
    book;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="text-3xl font-bold mb-2">{title}</div>
      <div className="text-xl text-gray-600 mb-4">{subTitle}</div>
      <img
        src={coverImgUrl}
        alt={title}
        className="w-64 h-auto mb-6 shadow-md rounded"
      />
      <div className="whitespace-pre-line text-gray-800 mb-6">
        {description}
      </div>
      <div className="text-sm text-gray-700">저자: {author}</div>
      <div className="text-sm text-gray-700">출판사: {publisher}</div>
    </div>
  );
};

export default Page;
