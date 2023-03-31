import axios from "axios";

const KAKAO_KEY = process.env.REACT_APP_KAKAO_KEY;

export const KakaoAPI = axios.create({
  baseURL: "https://dapi.kakao.com",
  headers: {
    Authorization: `KakaoAK ${KAKAO_KEY}`,
  },
});

export const bookSearch = (params) => {
  return KakaoAPI.get("/v3/search/book?target=title=query=${query}", {
    params,
  });
};
