import React from 'react';

function GoodsCard({ imageUrl, title, price }) {
    return (
        <div className="goods-card">
            <img src={imageUrl} alt={title} />
            <h3>{title}</h3>
            <p>Ціна: {price} грн</p>
        </div>
    );
}

export default GoodsCard;