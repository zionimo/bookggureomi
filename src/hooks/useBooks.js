import { useContext } from "react";
import AppStateContext from "../contexts/AppStateContext";

export default function useBooks() {
  const { books, searchBook } = useContext(AppStateContext);
  return { books, searchBook };
}
