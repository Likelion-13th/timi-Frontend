import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
  const location = useLocation();
  const currentPage = location.pathname;
  const isMyPage = location.pathname === "/mypage";

  return (
    <header data-page={isMyPage ? "mypage" : ""}>
      <div className="logo">
        <Link to="/">LIKELION</Link>
      </div>
      <nav className="nav-menu">
        <Link to="/new" className={currentPage === "/new" ? "active" : ""}>
          New
        </Link>
        <Link
          to="/perfume"
          className={currentPage === "/perfume" ? "active" : ""}
        >
          Perfume
        </Link>
        <Link
          to="/diffuser"
          className={currentPage === "/diffuser" ? "active" : ""}
        >
          Diffuser
        </Link>
        <Link
          to="/mypage"
          className={currentPage === "/mypage" ? "active" : ""}
        >
          Mypage
        </Link>
      </nav>
    </header>
  );
};

export default Header;