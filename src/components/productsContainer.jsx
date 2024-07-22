import { useState, useEffect } from "react"
import Products from "./productClass";
export default function ProductsContainer(){
    const [products, setProducts]= useState([]);
    const fetchProducts = async () => {
        try {
            const response = await fetch("../../../Productos.json");
            const data = await response.json();
            const results = data.map(result => new Products(
                result.name,
                result.image,
                result.description,
                result.price,
                result.variants,
                result.salePrice,
                result.cart,
                result.like
            ));
            setProducts(results);
        } catch (error) {
            console.error("Error fetching the products: ", error);
        }
    };

    fetchProducts();
//---------------------------------------------------------------------------------------------------------------
const [currentPage, setCurrentPage] = useState(1);
const [grid, setGrid] = useState("repeat(2, 1fr)");
const pageCount = Math.ceil(products.length / 24);

const optionalSpace = (products.length % 2 === 1) ? <div></div> : <></>;

const reducirPagina = () => {
  if (currentPage > 1) {
    setCurrentPage(currentPage - 1);
  }
};

const aumentarPagina = () => {
  if (currentPage < pageCount) {
    setCurrentPage(currentPage + 1);
  }
};

const renderProducts = () => {
  return products.slice((currentPage - 1) * 24, currentPage * 24);
};

useEffect(() => {
  const updateGrid = () => {
    setGrid(window.innerWidth >= 834 ? "repeat(4, 1fr)" : "repeat(2, 1fr)");
  };
  
  updateGrid(); // Initial check

  window.addEventListener('resize', updateGrid);
  return () => window.removeEventListener('resize', updateGrid);
}, []);

useEffect(() => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}, [currentPage]);

return (
  <>
    <div className="rm"style={{display:"flex",justifyContent:"center"}}><h2>Results: {products.length} Products</h2></div>
    <div className="filterProducts separador">
      <div className="filters">
        <form action="" method="get" className="filters">
        <span className="rm" >Filters</span>
        <input type="checkbox" name="" id="" />
        </form>
      </div>
      <div className="products" style={{ display: 'grid', gridTemplateColumns: grid }}>
        {renderProducts().map((product) => product.makeCard())}
        {optionalSpace}
      </div>
    </div>
    <div className="numberPages separador">
      <p>
        <span onClick={reducirPagina}>{"< -  "}</span>
        {Array.from({ length: pageCount }, (_, i) => (
          <span key={i} onClick={() => setCurrentPage(i + 1)}>{i + 1}  </span>
        ))}
        <span onClick={aumentarPagina}>{"- >"}</span>
      </p>
    </div>
  </>
);

}