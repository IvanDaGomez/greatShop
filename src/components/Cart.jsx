import { useEffect, useState } from 'react';
import Products from './productClass.jsx';

export default function Cart() {
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
            const filteredProducts = parsedProducts.filter(product => product.cart);
            setProducts(filteredProducts);
        })
        .catch(error => console.error('Error fetching the JSON file:', error));
    //const 
    }, []);

    let selected=[];
    const cerrarCarro = () => {
        let menu = document.querySelector(".productosCart");
        

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
        <div className="productosCart">
            <div className="separar">
            <h1>Your Shopping Cart</h1>
            <svg className="x cerrar" onClick={cerrarCarro} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={50} height={50} color={"#000000"} fill={"none"}>
    <path d="M19.0005 4.99988L5.00045 18.9999M5.00045 4.99988L19.0005 18.9999" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>      </div>
            {products.length === 0 ? (
                <><p>There are no products currently in your Cart</p><div></div></>
            ) : <div className="itemsContainer"> 
                {products.map((product, index) => (
                    <div key={index} className="item">
                        <input type="checkbox" className="paleta select"></input>
                        <div className="fotoItem">
                            <img src={product.image} alt={product.name} />
                        </div>
                        <div className="itemContent">
                                <p>{product.name}</p>
                                <div className="itemVariants">{product.variants.join(', ')}</div>
                                <div className="separar">
                                    <span>
                                        {product.price === product.salePrice ? (
                                            <>${product.price}</>
                                        ) : (
                                            <>
                                                <small><s>${product.price}</s></small> ${product.salePrice}
                                            </>
                                        )}
                                    </span>
                                    <div className="cantidadItem">
                                        <button className="reducirItem paleta cerrar">-</button>
                                        <span>{product.count}</span>
                                        <button className="aumentarItem paleta cerrar">+</button>
                                    </div>
                                </div>
                        </div>
                        
                    </div>

                ))}

            </div>
            }
            {(products.length === 0) ? <></>:<div className="totalPrice">
                            <div>
                            <input type="checkbox" className="paleta select">

                            </input>
                            <span>All</span>
                            </div>
                            <div><span>${selected.map(object=>object.price).reduce((a, b) => a + b, 0)}</span></div>
                            <div className="boton">
                                <span>Checkout ({selected.length})</span>
                            </div>
                        </div>
            }
            
        </div>
        </>
    );
}