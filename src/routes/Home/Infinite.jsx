import { useEffect, useRef, useState } from 'react';

export default function InfiniteSlider({ photos }) {

     
    const wrapperRef = useRef(null);

    const [hoveredIndex, setHoveredIndex] = useState(null);

    useEffect(() => {
        const wrapper = wrapperRef.current;
        const animationDuration = window.innerWidth / 50; // Adjust speed (50 pixels per second)

        wrapper.style.animationDuration = `${animationDuration}s`;
    }, [photos]);

    return (
        <div className="infiniteSlider">
            <div className="photoInfiniteWrapper" ref={wrapperRef}>
                {photos.concat(photos).map((photo, index) => (
                    <img
                        key={index}
                        className={`photoInfinite ${hoveredIndex !== null && hoveredIndex !== index ? 'grayscale' : ''}`}
                        src={photo}
                        onMouseOver={() => setHoveredIndex(index)}
                        onMouseOut={() => setHoveredIndex(null)}
                    />
                ))}
            </div>
        </div>
    );
}
