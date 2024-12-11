import React, { useState } from 'react';
import image from './assets/vienna-1.jpg.avif';  // Новий шлях до зображення

function Image({ altText }) {
    const [size, setSize] = useState(700);

    const increaseSize = () => setSize(size + 50);
    const decreaseSize = () => size > 50 && setSize(size - 50);

    return (
        <div>
            <img src={image} alt={altText} width={size} height={300} />
            <div>
                <button onClick={increaseSize}>Збільшити зображення</button>
                <button onClick={decreaseSize}>Зменшити зображення</button>
            </div>
        </div>
    );
}

export default Image;