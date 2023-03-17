import "../../styles/ui/Calendar.css";
import styled from "styled-components";
import { useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addDays } from "date-fns";
import { ko } from "date-fns/esm/locale";

const Calendar = () => {
  const [startDate, setStartDate] = useState(new Date());

  return (
    <StyleDatePicker
      showIcon
      dateFormat="yyyy년 MM월 dd일"
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      maxDate={addDays(new Date(), 5)}
      startDate={startDate}
      locale={ko} // 한국어로 변경 props 추가. default는 영어
    />
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
