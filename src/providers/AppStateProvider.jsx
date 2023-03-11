import { useEffect, useState } from "react";
import { bookSearch } from "../api";
import StateContext from "../contexts/AppStateContext";

const AppStateProvider = (props) => {
  // provider 컴포넌트가 무엇이든 감쌀 수 있도록
  // props로 children을 받음
  const { children } = props;

  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (query.length > 0) {
      // 컴포넌트 마운트 후에, 함수를 호출한다.
      // 첫번째 인자값 : 변경된 query state
      // 두번째 인자값 : 리스트를 초기화 한 후 다시 랜더링할 것인지 true/false
      bookSearchHandler(query, true);
    }
  }, [query]);

  const bookSearchHandler = async (query, reset) => {
    // param 값 설정
    const params = {
      query: query, // 검색을 원하는 질의어
      sort: "accuracy", // 결과 문서 정렬 방식, accuracy(정확도순) 또는 latest(발간일순), 기본값 accuracy
      size: 50, // 한 페이지에 보여질 문서 수, 1~50 사이의 값, 기본 값 10
      target: "title", // 검색 필드 제한. 사용 가능한 값: title(제목), isbn (ISBN), publisher(출판사), person(인명)
    };

    // api 호출
    const { data } = await bookSearch(params);

    if (reset) {
      setBooks(data.documents);
    } else {
      setBooks(books.concat(data.documents));
    }
  };

  const searchBook = (text) => {
    setQuery(text);
  };

  return (
    // porvider는 value라는 props를 설정할 수 있음
    // 여기에 글로벌로 관리할 실제값을 전달함
    <StateContext.Provider value={{ books, searchBook }}>
      {children}
    </StateContext.Provider>
  );
};

export default AppStateProvider;
