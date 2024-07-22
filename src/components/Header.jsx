import {useEffect} from 'react';
import { Link } from 'react-router-dom';
export default function Header(){

    useEffect(() => {

//------------------------------------FUNCIONES PARA CAMBIAR COLOR EN LAS PALETAS-----------------------
        const root = document.documentElement;

        function setColorPalette(color) {
            for (let i = 0; i < 6; i++) {
                root.style.setProperty(`--usando${i}`, getComputedStyle(root).getPropertyValue(`--paleta${color}${i}`));
            }
            localStorage.setItem('color', color); // Update local storage
        }

        // Load color from localStorage
        const color = localStorage.getItem('color') || "i"; // Default color
        setColorPalette(color);

        // Color palette functionality
        const paletaNeutra = document.querySelectorAll(".default");
        const paletaFem = document.querySelectorAll(".femenino");
        const paletaMasc = document.querySelectorAll(".masculino");

        // Event listeners for color palette buttons
        paletaNeutra.forEach(paleta=>paleta.addEventListener("click", () => setColorPalette("i")));
        paletaFem.forEach(paleta=>paleta.addEventListener("click", () => setColorPalette("c")));
        paletaMasc.forEach(paleta=>paleta.addEventListener("click", () => setColorPalette("n")));

//----------------------------------------------------------------------------------------------------



        return () => {
            // Cleanup event listeners when the component unmounts
            paletaNeutra.forEach(paleta=>paleta.removeEventListener("click", () => setColorPalette("c")));
            paletaFem.forEach(paleta=>paleta.removeEventListener("click", () => setColorPalette("n")));
            paletaMasc.forEach(paleta=>paleta.removeEventListener("click", () => setColorPalette("i")));
        };
    }, []);

//--------------------------------TRES COMPONENTES SEPARADOS: TITULO CON IMAGEN--------------------------
//-------------------------------INDICES Y FUNCIONES DE CAMBIO DE COLOR, USUARIO Y CARRITO---------------
const abrirMenu = () => {
    let menu = document.querySelector(".inhamburger");

    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "flex";
        menu.style.height = "0px";  // Ensure initial height is 0
        menu.style.animationName = "agrandar";
        menu.style.animationPlayState = "running";
        menu.addEventListener("animationend", function handler() {
            menu.style.animationPlayState = "paused";
            menu.style.height = "calc(60vh + 7px)";  // Reset height if necessary
            menu.removeEventListener("animationend", handler);  // Clean up event listener
        });
    } else {
        menu.style.animationName = "reducir";
        menu.style.animationPlayState = "running";
        menu.addEventListener("animationend", function handler() {
            menu.style.display = "none";
            menu.style.height = "0px";  // Ensure height is reset
            menu.removeEventListener("animationend", handler);  // Clean up event listener
        });
    }
};
const abrirCarro = () => {
    let menu = document.querySelector(".productosCart");
        if (window.innerWidth<=834){
            abrirMenu();
        }
        menu.style.display = "flex";
        menu.style.animationName = "abrir";
        menu.style.animationPlayState = "running";
        menu.addEventListener("animationend", function handler() {
            menu.style.animationPlayState = "paused";
            menu.style.right = "0"; 
            menu.removeEventListener("animationend", handler);  // Clean up event listener
        });
};
const abrirLike = () => {
    let menu = document.querySelector(".productosLike");
    if (window.innerWidth<=834){
        abrirMenu();
    }

        menu.style.display = "flex";
        menu.style.animationName = "abrir";
        menu.style.animationPlayState = "running";
        menu.addEventListener("animationend", function handler() {
            menu.style.animationPlayState = "paused";
            menu.style.right = "0"; 
            menu.removeEventListener("animationend", handler);  // Clean up event listener
        });
    };
    return <><header>
        <div className="headerIzq">
        <svg className='house' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={70} height={70} color={"#000000"} fill={"none"}>
    <path d="M2.9668 10.4961V15.4979C2.9668 18.3273 2.9668 19.742 3.84548 20.621C4.72416 21.5001 6.13837 21.5001 8.9668 21.5001H14.9668C17.7952 21.5001 19.2094 21.5001 20.0881 20.621C20.9668 19.742 20.9668 18.3273 20.9668 15.4979V10.4961" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M14.9668 16.9932C14.2827 17.6004 13.1936 17.9932 11.9668 17.9932C10.74 17.9932 9.65089 17.6004 8.9668 16.9932" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M10.1038 8.41848C9.82182 9.43688 8.79628 11.1936 6.84777 11.4482C5.12733 11.673 3.82246 10.922 3.48916 10.608C3.12168 10.3534 2.28416 9.53872 2.07906 9.02952C1.87395 8.52032 2.11324 7.41706 2.28416 6.96726L2.96743 4.98888C3.13423 4.49196 3.5247 3.31666 3.92501 2.91913C4.32533 2.5216 5.13581 2.5043 5.4694 2.5043H12.4749C14.2781 2.52978 18.2209 2.48822 19.0003 2.50431C19.7797 2.52039 20.2481 3.17373 20.3848 3.45379C21.5477 6.27061 22 7.88382 22 8.57124C21.8482 9.30456 21.22 10.6873 19.0003 11.2955C16.6933 11.9275 15.3854 10.6981 14.9751 10.2261M9.15522 10.2261C9.47997 10.625 10.4987 11.4279 11.9754 11.4482C13.4522 11.4686 14.7273 10.4383 15.1802 9.92062C15.3084 9.76786 15.5853 9.31467 15.8725 8.41848" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>
        <h1>ElectroShop</h1>
        </div>
        
        <div className="indice headerCen desaparecer">
            <Link to="/">Home</Link>
            <Link to="/news">News</Link>
            <Link to="">Products</Link>
            <Link to="">Sales</Link>
        </div>
        <div className="headerDer desaparecer">
            <div className="paleta default"></div>
            <div className="paleta femenino"></div>
            <div className="paleta masculino"></div>

        <svg className="like" onClick={abrirLike} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
    <path d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>

    
    <svg className="cart" onClick={abrirCarro} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
    <path d="M8 16L16.7201 15.2733C19.4486 15.046 20.0611 14.45 20.3635 11.7289L21 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M6 6H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="6" cy="20" r="2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="17" cy="20" r="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 20L15 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M2 2H2.966C3.91068 2 4.73414 2.62459 4.96326 3.51493L7.93852 15.0765C8.08887 15.6608 7.9602 16.2797 7.58824 16.7616L6.63213 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
</svg>


    <svg className="profile" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
        <path d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z" stroke="currentColor" strokeWidth="1.5" />
    </svg>
        </div>
        <svg className="hamburger" onClick={abrirMenu} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={50} height={50} color={"#000000"} fill={"none"}>
    <path d="M4 5L20 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 12L20 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M4 19L20 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>
        
    </header>
    <div className="inhamburger">

    <div className="indice pestañas"><Link  to="/">Home</Link></div>
    <div className="indice pestañas"><Link  to="/news">News</Link></div>
    <div className="indice pestañas"><Link  to="">Products</Link></div>
    <div className="indice pestañas"><Link  to="">Sales</Link></div>

    <div className="headerDer pestañas">
        <div className="paleta default"></div>
        <div className="paleta femenino"></div>
        <div className="paleta masculino"></div>
    </div>
    <div className='pestañas'>
<svg className="like" onClick={abrirLike} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
<path d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
</svg>


<svg className="cart" onClick={abrirCarro} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
<path d="M8 16L16.7201 15.2733C19.4486 15.046 20.0611 14.45 20.3635 11.7289L21 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
<path d="M6 6H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
<circle cx="6" cy="20" r="2" stroke="currentColor" strokeWidth="1.5" />
<circle cx="17" cy="20" r="2" stroke="currentColor" strokeWidth="1.5" />
<path d="M8 20L15 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
<path d="M2 2H2.966C3.91068 2 4.73414 2.62459 4.96326 3.51493L7.93852 15.0765C8.08887 15.6608 7.9602 16.2797 7.58824 16.7616L6.63213 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
</svg>


<svg className="profile" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
<path d="M6.57757 15.4816C5.1628 16.324 1.45336 18.0441 3.71266 20.1966C4.81631 21.248 6.04549 22 7.59087 22H16.4091C17.9545 22 19.1837 21.248 20.2873 20.1966C22.5466 18.0441 18.8372 16.324 17.4224 15.4816C14.1048 13.5061 9.89519 13.5061 6.57757 15.4816Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
<path d="M16.5 6.5C16.5 8.98528 14.4853 11 12 11C9.51472 11 7.5 8.98528 7.5 6.5C7.5 4.01472 9.51472 2 12 2C14.4853 2 16.5 4.01472 16.5 6.5Z" stroke="currentColor" strokeWidth="1.5" />
</svg>
</div>

</div></>
}
