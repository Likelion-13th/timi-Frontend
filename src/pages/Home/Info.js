import React from "react";
import './../../styles/Home.css';

const Info = () => {
    const image = `${process.env.PUBLIC_URL}/img/Info_image.jpg`;  
    
    return(
    
    <div className = "info-container">
        <div className = "info-section_1">
            <img src={image} alt="about" className= "info-image"/>
            <img src={image} alt="background" className= "info-background"/>
            <div className = "info-label">ABOUT US</div>
        </div>
        <div className = "info-section_2">
            <h1 className= "info-title">자연과의 공존,<br/>지속 가능한 아름다움을 향하여</h1>
            <br />
            <p className= "info-contents">
                '멋쟁이사자처럼'의 향수와 디퓨저는<br />
                자연에서 영감을 받아 엄선된 원료만을 사용해 만들어졌습니다.<br />
                <br />
                환경을 지키기 위한 노력으로 지속 가능한 제조 공정을 채택하며,<br />
                재활용 가능한 친환경 패키지를 사용합니다.<br />
                <br />
                단순한 향기가 아닌, 지구를 위한 작은 실천과 아름다움을 담았습니다.<br />
                <br />
                지금, 자연과 함께하는 향기를 경험해보세요.
            </p>
        </div>
    </div>

    );
};

export default Info;