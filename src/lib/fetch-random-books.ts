import { BookItemProps } from "../../type";

const fetchRandomBooks = async (): Promise<BookItemProps[]> => {
  const URL = "https://next-server-gray.vercel.app/random";

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

export default fetchRandomBooks;
