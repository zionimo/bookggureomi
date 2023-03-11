import { Link } from "react-router-dom";
import useBooks from "../hooks/useBooks";

const BookResult = () => {
  const { books } = useBooks();

  return (
    // 검색결과가 있으면 결과 출력
    // 검색결과가 없으면 '검색결과가 없습니다'출력
    <ul>
      {books.map((book) => {
        const { isbn, title, thumbnail, authors, publisher } = book;

        return (
          <Link to="bookdetail" state={{ book: book }}>
            <li key={isbn}>
              {/* 썸네일 이미지가 있다면 출력, 없다면 noThumbnail 이미지 출력 */}
              {thumbnail !== "" ? (
                <img
                  key={isbn}
                  src={thumbnail}
                  alt={title}
                  style={{ width: 90, height: 120 }}
                />
              ) : (
                <img
                  key={isbn}
                  src={require("../img/noThumbnail.jpg")}
                  alt={title}
                  style={{ width: 90, height: 120 }}
                />
              )}
              <h3>{title}</h3>
              <p>{authors}</p>
              <p>{publisher}</p>
            </li>
          </Link>
        );
      })}
    </ul>
  );
};

export default BookResult;
