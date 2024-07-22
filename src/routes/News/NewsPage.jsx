import Header from "../../components/Header"
import Footer from "../../components/footer"
import Loading from "../../components/Loading";
import {useState,useEffect} from 'react'
import Likes from "../../components/Likes";
import Cart from "../../components/Cart";
import ProductsContainer from "../../components/productsContainer";
//import PhotoSlider from "../../components/PhotoSlider";
import InfiniteSlider from "../Home/Infinite";


export default function NewsPage(){


//-------------------------------USO DE LA PANTALLA DE CARGA---------------------------------------
const [loading, setLoading] = useState(true);



  useEffect(() => {
    // Simular una llamada a API u otra acción asincrónica
    const loadData = async () => {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setLoading(false);
    };

    loadData();
  }, []);
  if (loading){
    document.documentElement.style.overflowY= "hidden"
  }
  else document.documentElement.style.overflowY= "scroll"
//----------------------------------------------------------------------------------------------


//-------------------------------photo slider-----------------------------------------------------
  let [sliderProducts, setSliderProducts] =useState([]);
  useEffect(()=>{
    fetch("../../../Productos.json").then(response => response.json())
    .then(product=> {
      const mapped = product.map(object=>object.image)
      setSliderProducts(mapped)
      })
    const primeros = sliderProducts.slice(0,5);
    setSliderProducts(primeros);
  },[sliderProducts])
    return(<>
    <hr className="space"/>
    {(loading)?<Loading/>:<>
        <Header />
        <InfiniteSlider photos={sliderProducts} />
        <div className="separador"></div>
        <ProductsContainer />
        <Footer />
        <Likes />
        <Cart />
        </>}

        </>
    )
}