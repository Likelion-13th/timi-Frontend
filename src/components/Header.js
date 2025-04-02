import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Header.css";

const Header = () => {
    const location = useLocation();
    const currentPage = location.pathname;
    const isMypage = currentPage === "/mypage";

    return(
        <div className = {isMypage ? "mypage-header": "header"}>
            <div className = "title">
                <Link to ="/" className="home-link">LIKELION</Link>
            </div>
            <div className = "item">
                <Link to ="/new" className={currentPage=== "/new" ? "active" : ""}>New</Link>
                <Link to= "/perfume" className={currentPage === "/perfume" ? "active" : ""}>Perfume</Link>
                <Link to= "/diffuser" className={currentPage === "/diffuser" ? "active" : ""}>Diffuser</Link>
                <Link to= "/mypage" className={currentPage === "/mypage" ? "active" : ""}>Mypage</Link>
            </div>
        </div>

    );
};

export default Header;