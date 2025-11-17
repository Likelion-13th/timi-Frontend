import React from 'react';
import Slider from 'react-slick';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./../../styles/CustomBanner.css";

const CustomArrow=({ onClick, direction}) => {
    const isPrev = direction === "prev";
    const arrowStyle = {
        width: "fit-content",
        height: "fit-content",
        position: "absolute",
        top: "50%",
        transform: isPrev ? "translateY(-50%)" : "translateY(-50%) rotate(180deg)",
        zIndex: 1,
        [isPrev ? "left" : "right"]: "25px",
    };

    return(
        <button 
        type= "button"
        data-role="none"
        className={`slick-arrow slick-${direction}`}
        onClick={onClick}
        style={arrowStyle}
        >
            <img 
            src = {`${process.env.PUBLIC_URL}/icon/icon_banner_arrow.svg`}
            alt ={isPrev ? "Previous" : "Next"}
            style={{ width: "144px", height: "144px"}}
            />
        </button>
    );
};

const Banner=() => {
    const settings={
        dots: true, //하단 도트 표시
        infinite: true, // 무한 반복
        speed: 500, // 전환 속도 (ms)
        slidesToShow: 1, //한 번에 보여줄 슬라이드 수
        slideToScroll: 1, // 한 번에 스크롤할 슬라이드 수
        autoplay: true, // 자동 재생
        autoplaySpeed: 3000, // 자동 재생 속도 (ms)
        arrows: true, //옆으로 이동하는 화살표 표시 여부
        prevArrow: <CustomArrow direction="prev" />,
        nextArrow: <CustomArrow direction="next" />,
    };

    const images = [
        `${process.env.PUBLIC_URL}/img/Banner_Home1.png`,
        `${process.env.PUBLIC_URL}/img/Banner_Home2.jpg`,
        `${process.env.PUBLIC_URL}/img/Banner_Home3.jpg`,
    ];

    return(
        <div className="banner-container">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key ={index}>
                        <img
                        src={image}
                        alt={`slide-${index+1}`}
                        style={{width: "100%" , height: "90vh", objectFit: "cover"}}
                        />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Banner;