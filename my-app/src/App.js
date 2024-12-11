import React from 'react';
import Header from './Header';
import Content from './Content';
import Image from './Image';
import GoodsGallery from './GoodsGallery'; // Імпортуємо GoodsGallery
import './App.css';

function App() {
    return (
        <div>
            <Header />
            <Content />
            <Image
                imageUrl="../LAB1/image/vienna-1.jpg.avif"
                altText="Відень"
            />
            <GoodsGallery />
        </div>
    );
}

export default App;