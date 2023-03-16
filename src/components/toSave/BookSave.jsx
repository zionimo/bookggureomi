import { Button } from "@mui/material";
import { useState } from "react";
import Finish from "./Fiinsh";
import Reading from "./Reading";
import Wish from "./Wish";

const BookSave = () => {
  const [contents, setContents] = useState(<Finish />);

  const statusArr = [
    {
      id: 1,
      title: "읽은 책",
      comment: "다 읽었어요!",
    },
    {
      id: 2,
      title: "읽고 있는 책",
      comment: "열심히 읽는 중!",
    },
    {
      id: 3,
      title: "읽고 싶은 책",
      comment: "찜 해두고 싶어요!",
    },
  ];

  return (
    <>
      <div>
        <h4>어떤 책 인가요?</h4>
      </div>

      <div>
        <button
          onClick={() => {
            setContents(<Finish />);
          }}
        >
          <h4>{statusArr[0].title}</h4>
          <p>{statusArr[0].comment}</p>
        </button>

        <button
          onClick={() => {
            setContents(<Reading />);
          }}
        >
          <h4>{statusArr[1].title}</h4>
          <p>{statusArr[1].comment}</p>
        </button>
        
        <button
          onClick={() => {
            setContents(<Wish />);
          }}
        >
          <h4>{statusArr[2].title}</h4>
          <p>{statusArr[2].comment}</p>
        </button>
      </div>

      <div>{contents}</div>

      <div>
        <Button>저장하기</Button>
      </div>
    </>
  );
};

export default BookSave;
