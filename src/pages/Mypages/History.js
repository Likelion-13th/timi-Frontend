import React from 'react';

const History=({historyData = [], onCancel}) => {
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('ko-KR').format(amount);
    };

    const formatDate = (isoString) => {
        if(!isoString) return "";
        return isoString.slice(0, 10);
    };
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
                            {historyData.length === 0 ? (
                                <tr>
                                    <td colSpan="6" style={{ textAlign: "center"}}>
                                        주문내역이 없습니다.
                                    </td>
                                </tr>
                            ): (
                                historyData.map((order) => (
                                    <tr key = {order.orderId}>
                                        <td>{formatDate(order.createdAt)}</td>
                                        <td>{order.itemName}</td>
                                        <td>{formatCurrency(order.quantity)}</td>
                                        <td>{formatCurrency(order.finalPrice)}</td>
                                        <td>{order.status}</td>
                                        <td>
                                            <div className="history-cancel">
                                                <div 
                                                    className="history-cancel-button"
                                                    onClick={() => onCancel(order.orderId)}
                                                >
                                                    취소
                                                </div>
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        );
};

export default History;