import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Layout = () => {
  return (
    <div id="wrapper">
      {/* 가운데정렬 태그 */}
      <center>
        <Outlet />
      </center>

      <Navbar />
    </div>
  );
};

export default Layout;
