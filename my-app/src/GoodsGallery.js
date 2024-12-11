import React from 'react';
import GoodsCard from './GoodsCard';

function GoodsGallery() {
    const goods = [
        {
            imageUrl: 'https://www.tablycjakalorijnosti.com.ua/file/image/foodstuff/2656b916d820c23b/c86421510b6245609473216e03a5781e',
            title: 'Яблуко',
            price: '27'
        },
        {
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh1uXlasMj50CeFWj4KjhNvpYwvg6nldjhEw&s',
            title: 'Груша',
            price: '43'
        },
        {
            imageUrl: 'https://img3.zakaz.ua/20201008.1602154135.ad72436478c_2020-10-08_Auchan_Alexey/20201008.1602154135.SNCPSG10.obj.0.1.jpg.oe.jpg.pf.jpg.1350nowm.jpg.1350x.jpg',
            title: 'Банан',
            price: '70'
        },
        {
            imageUrl: 'https://glycemic-index.net/images/FVRSYndNy8.webp',
            title: 'Персик',
            price: '140'
        },
        {
            imageUrl: 'https://varus.ua/img/product/1140/1140/127797',
            title: 'Апельсин',
            price: '64'
        },
        {
            imageUrl: 'https://www.fruit-market.com.ua/wp-content/uploads/2020/04/malina.jpg',
            title: 'Малина',
            price: '170'
        }
    ];

    return (
        <div className="goods-gallery">
            {goods.map((item, index) => (
                <GoodsCard
                    key={index}
                    imageUrl={item.imageUrl}
                    title={item.title}
                    price={item.price}
                />
            ))}
        </div>
    );
}

export default GoodsGallery;