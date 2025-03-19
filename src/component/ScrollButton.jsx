import "./ScrollButton.css";

const ScrollButton = () => {
    const smoothScroll = (direction) => {
        const scrollStep = 50;
        const targetScroll = direction === "up" ? 0 : document.documentElement.scrollHeight;
        
        const scrollAnimation = () => {
            const currentScroll = window.scrollY;
            if (
                (direction === "up" && currentScroll > 0) ||
                (direction === "down" && currentScroll < document.documentElement.scrollHeight - window.innerHeight)
            ) {
                window.scrollBy(0, direction === "up" ? -scrollStep : scrollStep);
                requestAnimationFrame(scrollAnimation);
            }
        };
        requestAnimationFrame(scrollAnimation);
    };

    return (
        <div className="scroll-button-container">
            <button className="scroll-button" onClick={() => smoothScroll("up")}>
                ↑
            </button>
            <button className="scroll-button" onClick={() => smoothScroll("down")}>
                ↓
            </button>
        </div>
    );
};

export default ScrollButton;

