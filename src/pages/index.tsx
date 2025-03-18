import BookItem from "@/components/book-item";
import SearchableLayout from "@/components/searchable-layout";
import books from "@/mock/books.json";
import { ReactNode } from "react";

const Home = () => {
  return (
    <div className="p-4">
      <section className="mb-8">
        <div className="text-xl font-bold mb-4">지금 추천하는 도서</div>
        <div className="grid grid-cols-1 gap-4">
          {books.map((book) => (
            <BookItem key={book.id} {...book} />
          ))}
        </div>
      </section>

      <section className="mb-8">
        <div className="text-xl font-bold mb-4">등록된 모든 도서</div>
        <div className="grid grid-cols-1 gap-4">
          {books.map((book) => (
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
