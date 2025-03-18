import Link from "next/link";
import { BookItemProps } from "../../type";

const BookItem = ({
  id,
  title,
  subTitle,
  description,
  author,
  publisher,
  coverImgUrl,
}: BookItemProps) => {
  return (
    <Link
      href={`/book/${id}`}
      className="flex gap-6 p-4 rounded-lg hover:bg-gray-50 transition-colors"
    >
      <img
        src={coverImgUrl}
        alt={title}
        className="w-32 h-auto object-cover rounded shadow-sm"
      />
      <div className="flex flex-col gap-1">
        <div className="font-bold text-lg text-gray-900">{title}</div>
        <div className="text-sm text-gray-600 mb-1">{subTitle}</div>
        <p className="text-sm text-gray-700 line-clamp-2 mb-2">{description}</p>
        <p className="text-xs text-gray-600">저자: {author}</p>
        <p className="text-xs text-gray-500">출판: {publisher}</p>
      </div>
    </Link>
  );
};

export default BookItem;
