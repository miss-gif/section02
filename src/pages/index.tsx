import BookItem from "@/components/book-item";
import SearchableLayout from "@/components/searchable-layout";
import fetchBooks from "@/lib/fetch-books";
import fetchRandomBooks from "@/lib/fetch-random-books";
import { InferGetStaticPropsType } from "next";
import { ReactNode } from "react";

export const getStaticProps = async () => {
  const [allBooks, randomBooks] = await Promise.all([
    fetchBooks(),
    fetchRandomBooks(),
  ]);

  return {
    props: { allBooks, randomBooks },
  };
};

const Home = ({
  allBooks,
  randomBooks,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="p-4">
      <section className="mb-8">
        <div className="text-xl font-bold mb-4">지금 추천하는 도서</div>
        <div className="grid grid-cols-1 gap-4">
          {randomBooks.map((book) => (
            <BookItem key={book.id} {...book} />
          ))}
        </div>
      </section>

      <section className="mb-8">
        <div className="text-xl font-bold mb-4">등록된 모든 도서</div>
        <div className="grid grid-cols-1 gap-4">
          {allBooks.map((book) => (
            <BookItem key={book.id} {...book} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;

Home.getLayout = (page: ReactNode) => {
  return <SearchableLayout>{page}</SearchableLayout>;
};
