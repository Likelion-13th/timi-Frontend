import React from 'react';
const History=() => {
    const onCancel = () => {
        //API 호출
        alert("취소");
    }

    const image = `${process.env.PUBLIC_URL}/img/History_image.jpg`;
        return(
            <div className="history-container-wrap">
                <div className="history-title">나의 쇼핑 내역</div>
                <div className="history-container">
                    <table className="history-table" cellPadding="10" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>주문 일자</th>
                                <th>상품 정보</th>
                                <th>수량</th>
                                <th>구매 금액</th>
                                <th>상태</th>
                                <th>주문 취소</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2025-01-01</td>
                                <td>
                                    <div className="history-section">
                                        <div className="history-section-left">
                                            <img src={image} alt="product" className= "history-image"/>
                                        </div>
                                        <div className="history-section-right">
                                            <div className="history-stat-label1">
                                                센트오브티 퍼퓸 디퓨저      
                                            </div>
                                            <div className="history-stat-label2">
                                                KUNDAL
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>1</td>
                                <td>135,000</td>
                                <td>배송중</td>
                                <td>
                                    <div className="history-cancel">
                                        <div 
                                        className="history-cancel-button"
                                        onClick={onCancel}
                                    >취소</div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
};

export default History;