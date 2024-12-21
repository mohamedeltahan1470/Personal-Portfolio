// import React  from 'react';
import "./ScrollButton.css";

const ScrollButton = () => {
    const scrollStep = 50; 
    const scrollDuration = 15;
    const scrollToTop = () => {
        const scrollInterval = setInterval(() => {
            const currentScroll = window.scrollY;
            if (currentScroll > 0) {
                window.scrollTo(0, currentScroll - scrollStep);
            } else {
                clearInterval(scrollInterval); 
            }
        }, scrollDuration);
    };
    const scrollToBottom = () => {
        const scrollInterval = setInterval(() => {
            const currentScroll = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            if (currentScroll < documentHeight - windowHeight) {
                window.scrollTo(0, currentScroll + scrollStep);
            } else {
                clearInterval(scrollInterval); 
            }
        }, scrollDuration);
    };
    return (
        <div className="scroll-button-container">
            <button className="scroll-button" onClick={scrollToTop}>
                ↑ 
            </button>
            <button className="scroll-button" onClick={scrollToBottom}>
                ↓ 
            </button>
        </div>
    );
};

export default ScrollButton;
