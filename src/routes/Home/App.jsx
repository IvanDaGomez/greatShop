import { useState,useEffect } from 'react'
import Header from '../../components/Header.jsx'
import Intro from './Intro.jsx'
import Loading from '../../components/Loading.jsx'
import Title from '../../components/Title.jsx'
import News from './News.jsx'
import Productos from './Products.jsx'
import Cart from '../../components/Cart.jsx'
import Likes from '../../components/Likes.jsx'
import InfiniteSlider from './Infinite.jsx'
import Footer from '../../components/footer.jsx'
//import Sales from './Sales.jsx'
import './App.css'

function App() {
 // const [count, setCount] = useState(0)
//const [products, setProducts] = useState([]);



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

//--------------------------------------------Slider Infinite------------------------------------
//Funciona con unas 10 fotos sin agregar width fijos
  let [sliderImages, setSliderImages] = useState([]);
  useEffect(() => {
    fetch("/Productos.json")
      .then(response => response.json())
      .then(data => {
        const images = data.map(obj => obj.image);
        setSliderImages(images);
      })
      .catch(error => console.error("Error fetching the images:", error));
  }, []);
//----------------------------------ESTRUCTURA DE LA APLICACION---------------------------------
  return (
    <>
    <hr className="space"/>
      {loading ? <Loading />:
      <>
      <Header />
      <Intro />
      <Title info="New Arrivals"/>
      <News />
      <Title info="Products"/>
      <Productos />
      <Title info="Sales"/>
      <Cart/>
      <Likes/>
      <InfiniteSlider photos={sliderImages}/>
      <Footer/>
      </>}

    </>
  ) 
      /*<Title info="Noticias"/>
      <Noticias />
      <Title info="Productos"/>*/
}

export default App
