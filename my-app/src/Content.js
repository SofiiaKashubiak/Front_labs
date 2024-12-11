import React, { Component } from 'react';

class Content extends Component {
    handleClick(id) {
        const element = document.getElementById(id);
        element.classList.toggle('bg-color-1');
    }

    render() {
        return (
            <main>
                <h3>Мої хобі:</h3>
                <ul>
                    <li>Випічка</li>
                    <li>Танці</li>
                    <li>В'язання</li>
                </ul>

                <h3>Мої улюблені книги та фільми:</h3>
                <ol>
                    <li>Фільм: «Відчайдушні домогосподарки»</li>
                    <li>Книга: «Іспанський любовний обман»</li>
                    <li>Книга: «Фейкова імперія»</li>
                </ol>

                <h3>Моє улюблене місто:</h3>
                <p
                    id="item-2"
                    onClick={() => this.handleClick('item-2')}
                >
                    Відень — столиця Австрії, відома своєю багатою історією...
                </p>
            </main>
        );
    }
}

export default Content;