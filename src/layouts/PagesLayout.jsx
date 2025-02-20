import Header from "../pages/HomePage-components/Header.jsx";
import { Outlet } from "react-router-dom";
import "./PagesLayout.css";

export default function PagesLayout() {
  return (
    <div className="PagesLayout">
      <Header />
      <Outlet />
    </div>
  );
}
