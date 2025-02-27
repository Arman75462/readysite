import { Outlet } from "react-router-dom";
import ScrollToTop from "../elements/ScrollToTop.jsx";
import Header from "../pages/HomePage-components/Header.jsx";
import "./PagesLayout.css";

export default function PagesLayout() {
  return (
    <div className="PagesLayout">
      <ScrollToTop />
      <Header />
      <Outlet />
    </div>
  );
}
