import React, { useState } from "react";
import Banner from "./Banner";
import ProductCard from "./ProductCard";
import "../../styles/ProductPage.css";
import PayModal from "./../../components/PayModal";

const New=() => {
    const products = [
        {
            id: 1,
            name: "클린 오 드 퍼퓸",
            brand: "엣",
            price: 40000,
            imagePath: "img/perfume_img/perfume_3.png",
            isNew: true,
        },
        {
            id: 2,
            name: "나이트 자스민 퍼퓸",
            brand: "플로리스 런던",
            price: 155500,
            imagePath: "img/perfume_img/perfume_9.png",
            isNew: true,
        },
        {
            id: 3,
            name: "메그놀리아 브리스 퍼퓸",
            brand: "줄리엣 헤즈 어 건",
            price: 153000,
            imagePath: "img/perfume_img/perfume_13.png",
            isNew: true,
        },
        {
            id: 4,
            name: "미스티블루 디퓨저",
            brand: "코코도르",
            price: 30000,
            imagePath: "/img/diffuser_img/diffuser_2.png",
            isNew: true,
        },
        {
            id: 5, 
            name: "포레스트 디퓨저",
            brand: "코코도르",
            price: 23500,
            imagePath:"/img/diffuser_img/diffuser_5.png",
            isNew: true, 
        },
    ];

    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCardClick = (product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
        setIsModalOpen(false);
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
                <Banner title="New" imagePath={"/banner_new.png"} />
                <div className="product-container">
                    <div className="product-grid">
                        {products.map((product)=>(
                            <ProductCard
                            key={product.id}
                            product={product}
                            onClick={()=> handleCardClick(product)}
                            />
                        ))}
                    </div>
                </div>
                {isModalOpen && (
                    <PayModal product={selectedProduct} onClose={handleCloseModal} />
                )}
            </div>
            <div className="paging">
            {currentPage > 1 && (
                <button>
                    prev
                </button>
            )}
            {Array.from({ length: totalPages }, (_, i) => i + 1 ). map(
                (pageNumber) => (
                    <button
                    key={pageNumber}
                    >
                        {pageNumber}
                    </button>
                )
            )}
            {currentPage < totalPages && (
                <button>
                    Next
                </button>
            )}
            </div>
        </div>
        );
};

export default New;