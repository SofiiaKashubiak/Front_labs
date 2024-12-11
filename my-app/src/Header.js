import React, { useState } from 'react';
import './App.css';

function Header() {
    const n = 11;
    const targetIndex = (n % 10) + 1;

    const toggleColorById = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.classList.toggle("highlight-id");
        }
    };

    const toggleColorBySelector = (selector) => {
        const element = document.querySelector(selector);
        if (element) {
            element.classList.toggle("highlight-selector");
        }
    };

    return (
        <header>
            <h2>Кашуб'як Софія Михайлівна</h2>
            <p className="bg-color-1">Інформація про дату і місце народження:</p>
            <p
                id="date-of-birth"
                className="bg-color-2"
                onClick={() => toggleColorById('date-of-birth')}
            >
                Дата народження: 10 грудня 2004 року
            </p>

            <p
                id="place-of-birth"
                className="place-of-birth"
                onClick={() => toggleColorBySelector('#place-of-birth')}
            >
                Місце народження: Луцьк, Україна
            </p>

            <p>Освіта: Луцький ліцей № 21<br />Київський політехнічний інститут імені Ігоря Сікорсього</p>
        </header>
    );
}

export default Header;