import axios from "axios";

const KAKAO_KEY = "fb4c30bd11865ec4a0c0e0847ab4c9c8";

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
