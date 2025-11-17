import React from "react";
import './../../styles/Home.css';

const Info = () => {
    const image = `${process.env.PUBLIC_URL}/img/Home_Info.jpg`;  
    
    return(
    
    <div className = "info-container">
        <div className = "info-section_1">
            <img src={image} alt="about" className= "info-image"/>
            <img src={image} alt="background" className= "info-background"/>
            <div className = "info-label">ABOUT US</div>
        </div>
        <div className = "info-section_2">
            <h1 className= "info-title">시간을 기록하는 도구,<br/>일상을 채우는 빈티지한 감성</h1>
            <br />
            <p className= "info-contents">
                'CASIO VINTAGE'와 'CASIO ANALOG'는 <br />
                지금 이 순간의 나를 가장 자연스럽게 보여주는 시계입니다.<br />
                <br />
                레트로한 디지털 감성을 담은 VINTAGE 라인은,<br />
                메탈 브레이슬릿과 클래식한 화면 구성으로<br />
                어제의 추억과 오늘의 일상을 동시에 비춥니다.<br />
                <br />
                침의 움직임 하나까지 담아낸 ANALOG 라인은,<br />
                깔끔한 다이얼과 안정감 있는 컬러로<br />
                어느 상황에서나 자연스럽게 어울립니다. <br />
                <br />
                지금, 당신의 시간을 담을 VINTAGE & ANALOG 컬렉션을 만나보세요.
            </p>
        </div>
    </div>

    );
};

export default Info;