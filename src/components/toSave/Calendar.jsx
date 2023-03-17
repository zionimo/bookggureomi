import "../../styles/ui/Calendar.css";
import styled from "styled-components";
import { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getYear, getMonth, addDays } from "date-fns";
import { ko } from "date-fns/esm/locale";

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const _ = require("lodash");
  // range(시작년도, 마지막년도);
  const years = _.range(2000, getYear(new Date()) + 1, 1);
  const months = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];

  return (
    <>
      <StyleDatePicker
        renderCustomHeader={({
          date,
          changeYear,
          changeMonth,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }) => (
          <div
            style={{
              margin: 10,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <button onClick={decreaseMonth} disabled={prevMonthButtonDisabled}>
              {"<"}
            </button>
            <select
              value={getYear(date)}
              onChange={({ target: { value } }) => changeYear(value)}
            >
              {years.map((option) => (
                <option key={option} value={option}>
                  {option}년
                </option>
              ))}
            </select>

            <select
              value={months[getMonth(date)]}
              onChange={({ target: { value } }) =>
                changeMonth(months.indexOf(value))
              }
            >
              {months.map((option) => (
                <option key={option} value={option}>
                  {option}월
                </option>
              ))}
            </select>

            <button onClick={increaseMonth} disabled={nextMonthButtonDisabled}>
              {">"}
            </button>
          </div>
        )}
        selected={startDate}
        dateFormat={"yyyy년 MM월 dd일"}
        locale={ko} // 한국어 적용. default는 영어
        onChange={(date) => setStartDate(date)}
        maxDate={addDays(new Date(), 0)}
        withPortal // 팝업형식
      />
    </>
  );
};

export default Calendar;

// DatePicker 커스텀
const StyleDatePicker = styled(DatePicker)`
  margin-top: 0.3rem;
  width: 300px;
  height: 40px;
  box-sizing: border-box;
  padding: 0 10px;
  border-radius: 10px;
  border: none;
`;
