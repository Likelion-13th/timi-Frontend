import React, {useState} from "react";
import Banner from "./Banner";
import ProductCard from "./ProductCard";
import "../../styles/ProductPage.css";
import PayModal from "./../../components/PayModal";


const Diffuser=() => {
    const products = [
        {
            id:1,
            name: "벚꽃 디퓨저",
            brand: "코코도르",
            price: 40000,
            imagePath: "/img/diffuser_img/diffuser_1.png",
            isNew: false,
        },
        {
            id:2,
            name: "미스티블루 디퓨저",
            brand: "코코도르",
            price: 30000,
            imagePath: "/img/diffuser_img/diffuser_2.png",
            isNew: true,
        },
        {
            id:3,
            name: "모먼트 디퓨저",
            brand: "코코도르",
            price: 30000,
            imagePath: "/img/diffuser_img/diffuser_3.png",
            isNew: false,
        },
        {
            id:4,
            name: "멀티클래식 디퓨저",
            brand: "코코도르",
            price: 43400,
            imagePath: "/img/diffuser_img/diffuser_4.png",
            isNew: false,
        },
        {
            id:5,
            name: "포레스트 디퓨저",
            brand: "코코도르",
            price: 23500,
            imagePath: "/img/diffuser_img/diffuser_5.png",
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
                <Banner title="Diffuser" imagePath={"/banner_diffuser.jpg"} />
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
                    <PayModal product={selectedProduct} onClose={handleCloseModal}/>
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

export default Diffuser;