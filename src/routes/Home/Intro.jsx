import  { useState, useEffect,useRef } from 'react';

export default function Intro() {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const imgs = [
        "https://cdc.gov.kh/wp-content/uploads/2021/09/electronics.jpeg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfngc6XKSI7P4KekbKdIpfTfqhlXET2gdBSA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_dcm0uaQvXpCL1jfBBWVNBpFFIIa8WIsBhw&s",
        "https://t3.ftcdn.net/jpg/02/57/16/84/360_F_257168460_AwhicdEIavp7bdCbHXyTaBTHnBoBcZad.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_UcA9XuPS45ZdeuGYOeoIOHKFIY7E3chdMA&s"
    ];

    const randimage = (images) => {
        return images[Math.floor(Math.random() * images.length)];
    };
//---------------------------------------------------------ENTENDER-------------------
    const [imagen, setImagen] = useState(randimage(imgs));
    const imgRef = useRef(null);

    useEffect(() => {
        const handleAnimationEnd = () => {
            setImagen(randimage(imgs));
        };

        const imgElement = imgRef.current;
        imgElement.addEventListener('animationiteration', handleAnimationEnd);

        return () => {
            imgElement.removeEventListener('animationiteration', handleAnimationEnd);
        };
    }, [imgs]);
//------------------------------------------------ENTENDER----------------------------
    return (
        <div className="intro">
            <div className="crazyIntro">
                <h1>All your Projects about Electronics in one place</h1>
                <hr />
                <p>Just look for everything you would like to search, there is also information about the electronics if you dont know what is their function</p>
                <div className="boton">More Info</div>
            </div>
            <div className="crazyImg" ref={imgRef}>
                <img src={imagen} alt="Random Electronics" />
            </div>
        </div>
    );
}