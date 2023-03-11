import { useLocation } from "react-router-dom";
import { Button } from "@mui/material";
import Header from "./Header";
import noThumbnail from "../img/noThumbnail.jpg";
import { useState } from "react";
import BookSave from "./BookSave";

const BookDetail = () => {
  const [saveBook, setSaveBook] = useState(false);
  const location = useLocation();
  // BookResult.jsx에서 state 받음
  const book = location.state.book;

  const {
    isbn,
    thumbnail,
    title,
    authors,
    publisher,
    datetime,
    contents,
    url,
  } = book;

  // [YYYY]-[MM]-[DD]T[hh]:[mm]:[ss].000+[tz] 형태로 제공되는 datetime
  // 연,월,일 정보만 활용함. split()메소드로 T기준 아래로 자르기
  const date = datetime.split("T")[0];
  // yyyy년 mm월 dd일 형태로 바꿈
  const dateTime = date.replace("-", "년").replace("-", "월") + "일";

  const handleSaveBook = () => {
    setSaveBook(!saveBook);
  };

  return (
    <div>
      <Header>
        <Button onClick={handleSaveBook} size="large" color="inherit">
          저장
        </Button>
      </Header>

      {/* 인라인 css 설정해둠 수정할 것 */}
      <div style={{ height: 250, background: "white" }}>
        {thumbnail ? (
          <img
            key={isbn}
            src={thumbnail}
            alt={title}
            style={{ width: 150, height: 200 }}
          />
        ) : (
          <img
            key={isbn}
            src={noThumbnail}
            alt={title}
            style={{ width: 150, height: 200 }}
          />
        )}
      </div>

      <div>
        <h2>{title}</h2>
      </div>

      <ul>
        <li>
          <div>저자</div>
          <div>
            <span>{authors}</span>
          </div>
        </li>
        <li>
          <div>출판</div>
          <div>
            <span>{publisher}</span>
          </div>
        </li>
        <li>
          <div>발행</div>
          <div>
            <span>{dateTime}</span>
          </div>
        </li>
      </ul>

      <div>
        <h3>책 소개</h3>
        {contents ? (
          <span>{contents}</span>
        ) : (
          <span>
            소개내용이 없습니다. 자세히 보기를 클릭하여 책 정보를 확인하세요!
          </span>
        )}
      </div>

      <div>
        <a href={url}>자세히 보기</a>
      </div>
      {saveBook && <BookSave />}
    </div>
  );
};

export default BookDetail;
