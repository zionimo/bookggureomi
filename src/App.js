import "./styles/Global.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Main from "./pages/Main";
import Profile from "./pages/Profile";
import BookGraph from "./pages/BookGraph";
import Library from "./pages/Library";
import BookReview from "./pages/BookReview";
import NotFound from "./components/NotFound.jsx";
import BookDetail from "./components/BookDetail";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Main />} />
          <Route path="bookdetail" element={<BookDetail />} />
          <Route path="library" element={<Library />} />
          <Route path="bookgraph" element={<BookGraph />} />
          <Route path="bookreview" element={<BookReview />} />
          <Route path="profile" element={<Profile />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
