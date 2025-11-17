import React, { useState, useEffect } from "react";
import Banner from "./Banner";
import ProductCard from "./ProductCard";
import "../../styles/ProductPage.css";
import PayModal from "./../../components/PayModal";
import axios from "axios";
import { useCookies } from 'react-cookie';

const New=() => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleCardClick = (product) => {
        setSelectedProduct(product);
        if(typeof cookies.accessToken !== "string") {
            alert("로그인이 필요합니다.")
            return;
        }
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setSelectedProduct(null);
        setIsModalOpen(false);
    };
    const [cookies] = useCookies(['accessToken']);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; // 페이지당 5개 상품 표시
    
    const totalPages = Math.ceil(products.length / itemsPerPage);
    
    const startIndex = (currentPage -1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentProducts = products.slice(startIndex, endIndex);
    
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        axios.get("/categories/1/items", {
            headers: {
                accept: "*/*",
            },
        })
        .then((response) => {
            setProducts(response.data.result);
        })
        .catch((err) => {
            console.log("CATEGORY API 요청 실패", err);
        });

    },[]);

        return(
        <div>
            <div>
                <Banner title="NEW" imagePath={"/Banner_New.jpg"} />
                <div className="product-container">
                    <div className="product-grid">
                        {currentProducts.map((product)=>(
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
                <button onClick ={()=> handlePageChange(currentPage - 1)} >
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
                <button onClick ={()=> handlePageChange(currentPage + 1)}>
                    Next
                </button>
            )}
            </div>
        </div>
        );
};

export default New;