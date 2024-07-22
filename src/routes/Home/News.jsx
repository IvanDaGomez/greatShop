import Products from "../../components/productClass";


// FUNCION PARA MOSTRAR LOS ELECTRONICOS ACTUALIZADOS MAS RECIENTEMENTE--------------------------------------------
export default function News(){
    
    const product1 = new Products(
        'Noise Cancelling Headphones',
        'https://queue-it.com/media/ppcp1twv/product-drop.jpg',
        'Block out the world and immerse yourself in music with these high-quality noise cancelling headphones. Ideal for travel, work, or relaxation.',
        199.99,
        ['#000000', '#808080'],
        149.99
    );
    
    const product2 = new Products(
        '4K Ultra HD Camera',
        'https://media-cldnry.s-nbcnews.com/image/upload/t_fit-760w,f_auto,q_auto:best/newscms/2021_07/3451045/210218-product-of-the-year-2x1-cs.jpg',
        'Capture stunning photos and videos with this 4K Ultra HD Camera. Perfect for professional photographers and hobbyists alike.',
        899.99,
        ['#FF5733', '#C0C0C0']
       
    );
    
    const product3 = new Products(
        'Smart Home Speaker',
        'https://i.insider.com/5ed95c393f7370198527eea3?width=700',
        'Transform your living space with this Smart Home Speaker. With voice control and seamless connectivity, managing your smart home has never been easier.',
        129.99,
        ['#FFFFFF', '#000000'],
        99.99
    );
    
    const product4 = new Products(
        'Fitness Tracker',
        'https://cdn.shopify.com/s/files/1/0070/7032/files/trending-products_c8d0d15c-9afc-47e3-9ba2-f7bad0505b9b.png?v=1614559651',
        'Track your activity, monitor your heart rate, and stay motivated with this advanced Fitness Tracker. A perfect companion for your health and fitness journey.',
        49.99,
        ['#FF1493', '#000000', "#ffffff"]
        
    );
    
    const product5 = new Products(
        'Electric Toothbrush',
        'https://www.researchgate.net/publication/221362362/figure/fig2/AS:305566657335318@1449864176496/Sample-of-in-vitro-images-for-different-products.png',
        'Achieve a superior clean with this Electric Toothbrush. With multiple brushing modes and a sleek design, it ensures optimal dental hygiene.',
        69.99,
        ['#00BFFF', '#FFFFFF'],
        59.99
    );
    //const usando= getComputedStyle(document.documentElement).getPropertyValue(`--usando0`)
    return (
<div className="productsTable">
        {product1.makeCard()}
        {product2.makeCard()}
        {product3.makeCard()}
        {product4.makeCard()}
        {product5.makeCard()}
        <div className="card more zoom">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={100} height={100} color="#000000" fill={"none"}>
    <path d="M20 18L20 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M16 11.9995L4 11.9995" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M12 8C12 8 16 10.946 16 12C16 13.0541 12 16 12 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
</svg>
        </div>
</div>

    )

}