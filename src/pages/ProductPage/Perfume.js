import React, { useState } from "react";
import Banner from "./Banner";
import ProductCard from "./ProductCard";
import "../../styles/ProductPage.css";
import PayModal from "./../../components/PayModal";

const Perfume=() => {
    const products = [
        {
            id: 1,
            name: "엑스 베티버 오 드 퍼퓸",
            brand: "줄리엣 헤즈 어 건",
            price: 153000,
            imagePath: "img/perfume_img/perfume_1.png",
            isNew: false,
        },
        {
            id: 2,
            name: "시레나 오 드 퍼퓸",
            brand: "플로리스 런던",
            price: 297000,
            imagePath: "img/perfume_img/perfume_2.png",
            isNew: false,
        },
        {
            id: 3,
            name: "클린 오 드 퍼퓸",
            brand: "엣",
            price: 40000,
            imagePath: "img/perfume_img/perfume_3.png",
            isNew: true,
        },
        {
            id: 4,
            name: "릴리 오 드 퍼퓸",
            brand: "센츠텔러",
            price: 36000,
            imagePath: "img/perfume_img/perfume_4.png",
            isNew: false,
        },
        {
            id: 5,
            name: "어퍼플 로즈 오 드 퍼퓸",
            brand: "스튜디오 오도르",
            price: 38500,
            imagePath: "img/perfume_img/perfume_5.png",
            isNew: false,
        },
        {
            id: 6,
            name: "체리 블라썸 퍼퓸",
            brand: "플로리스 런던",
            price: 297000,
            imagePath: "img/perfume_img/perfume_6.png",
            isNew: false,
        },
        {
            id: 7,
            name: "프리지아 오드 코롱",
            brand: "산타마리아노벨라",
            price: 165000,
            imagePath: "img/perfume_img/perfume_7.png",
            isNew: false,
        },
        {
            id: 8,
            name: "잉글리시 프리지아 퍼퓸",
            brand: "조말론",
            price: 79800,
            imagePath: "img/perfume_img/perfume_8.png",
            isNew: false,
        },
        {
            id: 9,
            name: "나이트 자스민 퍼퓸",
            brand: "플로리스 런던",
            price: 155500,
            imagePath: "img/perfume_img/perfume_9.png",
            isNew: true,
        },
        {
            id: 10,
            name: "미스디올 블루밍 부케",
            brand: "디올",
            price: 145000,
            imagePath: "img/perfume_img/perfume_10.png",
            isNew: false,
        },
        {
            id: 11,
            name: "릴리 오 드 뚜왈렛",
            brand: "플로리스 런던",
            price: 155000,
            imagePath: "img/perfume_img/perfume_11.png",
            isNew: false,
        },
        {
            id: 12,
            name: "엠버술탄 오 드 퍼퓸",
            brand: "세르주르 텐",
            price: 130000,
            imagePath: "img/perfume_img/perfume_12.png",
            isNew: false,
        },
        {
            id: 13,
            name: "메그놀리아 브리스 퍼퓸",
            brand: "줄리엣 헤즈 어 건",
            price: 153000,
            imagePath: "img/perfume_img/perfume_13.png",
            isNew: true,
        },
        {
            id: 14,
            name: "JS 오 드 뚜왈렛",
            brand: "플로리스 런던",
            price: 155500,
            imagePath: "img/perfume_img/perfume_14.png",
            isNew: false,
        },
        {
            id: 15,
            name: "페어 잉크 오 드 퍼퓸",
            brand: "줄리엣 헤즈 어 건",
            price: 153000,
            imagePath: "img/perfume_img/perfume_15.png",
            isNew: false,
        },

    ];

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setModalOpen] = useState(false);

    const handleCardClick = (product) => {
        setSelectedProduct(product);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
        setModalOpen(false);
    };

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // 페이지당 5개 상품 표시

    const totalPages = Math.ceil(products.length / itemsPerPage);

    const startIndex = (currentPage -1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = products.slice(startIndex, endIndex);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };


    return(
    <div>
        <div>
            <Banner title= "Perfume" imagePath={"/banner_perfume.jpg"} />
            <div className="product-container">
                <div className="product-grid">
                    {currentProducts.map((product)=>(
                        <ProductCard 
                            key={product.id} 
                            product={product} 
                            onClick={() => handleCardClick(product)}
                        />
                    ))}
                </div>
            </div>
            {isModalOpen && ( 
                <PayModal 
                    product={selectedProduct} 
                    onClose={handleCloseModal} 
                />
            )}
        </div>
        <div className="paging">
            {currentPage > 1 && (
                <button onClick={() => handlePageChange(currentPage - 1)}>
                    prev
                </button>
            )}
            {Array.from({ length: totalPages }, (_, i) => i + 1 ).map(
                (pageNumber) => (
                    <button
                    key={pageNumber}
                    onClick={()=> handlePageChange(pageNumber)}
                    className={currentPage === pageNumber ? "active" : ""}
                    >
                        {pageNumber}
                    </button>
                )
            )}
            {currentPage < totalPages && (
                <button onClick={() => handlePageChange(currentPage + 1)}>
                    Next
                </button>
            )}
        </div>
    </div>
    );
};

export default Perfume;