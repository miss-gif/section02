import { BookItemProps } from "../../type";

const fetchOneBooks = async (id:number): Promise<BookItemProps | null> => {
  const URL = `http://localhost:12345/book/${id}`;

  try {
    const response = await fetch(URL);

    if (!response.ok) {
      throw new Error("서버 상태가 이상합니다!");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
};

export default fetchOneBooks;
