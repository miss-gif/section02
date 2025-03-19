import { BookItemProps } from "../../type";

const fetchBooks = async (q?: string): Promise<BookItemProps[]> => {
  let URL = "http://localhost:12345/book";

  if (q) {
    URL += `/search?q=${q}`;
  }

  try {
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error("서버 상태가 이상합니다!");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return [];
  }
};

export default fetchBooks;
