import { useEffect, useState } from 'react';
import Products from './productClass.jsx';

export default function Likes() {
 const [products, setProducts] = useState([]);

useEffect(() => {
    fetch('../Productos.json')
        .then(response => response.json())
        .then(jsonData => {
            const parsedProducts = jsonData.map(item => {
                return new Products(
                    item.name,
                    item.image,
                    item.description,
                    item.price,
                    item.variants,
                    item.salePrice,
                    item.cart,
                    item.like,
                    item.count
                );
            });
            const filteredProducts = parsedProducts.filter(product => product.like);
            setProducts(filteredProducts);
        })
        .catch(error => console.error('Error fetching the JSON file:', error));
    //const 
    }, []);

    //let selected=[];
    const cerrarLike = () => {
        let menu = document.querySelector(".productosLike");
        

            menu.style.animationName = "cerrar";
            menu.style.animationPlayState = "running";
            menu.addEventListener("animationend", function handler() {
                menu.style.right = "-40vw";  
                menu.style.display = "none";
                menu.removeEventListener("animationend", handler);  // Clean up event listener
            });
/*    const abrirCarro = () => {
        let menu = document.querySelector(".productosCard");
    
        if (menu.style.right == "-40vw") {
            
            menu.style.animationName = "abrir";
            menu.style.animationPlayState = "running";
            menu.addEventListener("animationend", function handler() {
                menu.style.animationPlayState = "paused";
                menu.style.right = "0"; 
                menu.removeEventListener("animationend", handler);  // Clean up event listener
            });
        } else {
            menu.style.animationName = "cerrar";
            menu.style.animationPlayState = "running";
            menu.addEventListener("animationend", function handler() {
                menu.style.right = "-40vw";  
                menu.removeEventListener("animationend", handler);  // Clean up event listener
            });
        }*/
    };
    return (
        <>
        <div className="productosLike">
            <div className="separar">
            <h1>Your Likes</h1>
            <svg className="x cerrar" onClick={cerrarLike} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={50} height={50} color={"#000000"} fill={"none"}>
    <path d="M19.0005 4.99988L5.00045 18.9999M5.00045 4.99988L19.0005 18.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>      </div>
            {products.length === 0 ? (
                <p>There are no products currently in your Cart</p>
            ) : <div className="itemsContainer"> 
                {products.map((product, index) => (
                    <div key={index} className="item">
                        <div className="arribaAbajo">
                        <svg className="cart"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
    <path d="M8 16L16.7201 15.2733C19.4486 15.046 20.0611 14.45 20.3635 11.7289L21 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M6 6H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <circle cx="6" cy="20" r="2" stroke="currentColor" strokeWidth="1.5" />
    <circle cx="17" cy="20" r="2" stroke="currentColor" strokeWidth="1.5" />
    <path d="M8 20L15 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M2 2H2.966C3.91068 2 4.73414 2.62459 4.96326 3.51493L7.93852 15.0765C8.08887 15.6608 7.9602 16.2797 7.58824 16.7616L6.63213 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
</svg>
<svg className="x cerrar"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={25} height={25} color={"#000000"} fill={"none"}>
    <path d="M19.0005 4.99988L5.00045 18.9999M5.00045 4.99988L19.0005 18.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>
                        </div>
                        <div className="fotoItem">
                            <img src={product.image} alt={product.name} />
                        </div>
                        <div className="itemContent">
                                <p>{product.name}</p>
                                <div className="itemVariants">{product.variants.join(', ')}</div>
                                
                                <span>
                                    {product.price === product.salePrice ? (
                                        <>${product.price}</>
                                    ) : (
                                        <>
                                            <small><s>${product.price}</s></small> ${product.salePrice}
                                        </>
                                    )}
                                </span>

                                
                        </div>
                        
                    </div>
                ))}
            </div>
            }

            
        </div>
        </>
    );
}