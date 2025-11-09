import '../App.css';

import React, {useState} from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {CookiesProvider} from "react-cookie"

//푸터도 임포트
import Footer from"./Footer";
import Header from"./Header";
import ToolBar from "./ToolBar";
import Home from "../pages/Home/Home";
import Mypage from "../pages/Mypages/Mypage";
import Diffuser from "../pages/ProductPage/Diffuser";
import Perfume from "../pages/ProductPage/Perfume";
import New from "../pages/ProductPage/New";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <CookiesProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home onLoginChange={setIsLogin} />}/>
          <Route path="/mypage" element={<Mypage />}/>
          <Route path="/diffuser" element={<Diffuser />}/>
          <Route path="/perfume" element={<Perfume />}/>
          <Route path="/new" element={<New />}/>
        </Routes>
        <Footer />
        <Header />
        <ToolBar isLogin={isLogin} onLoginChange={setIsLogin} />
      </Router>
    </CookiesProvider>
  );
}

export default App;
