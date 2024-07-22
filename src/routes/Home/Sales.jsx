import Products from "../../components/productClass";
export default function Sales(){
    const product1 = new Products(
        'Electric Toothbrush',
        'https://www.researchgate.net/publication/221362362/figure/fig2/AS:305566657335318@1449864176496/Sample-of-in-vitro-images-for-different-products.png',
        'Achieve a superior clean with this Electric Toothbrush. With multiple brushing modes and a sleek design, it ensures optimal dental hygiene.',
        69.99,
        ['#00BFFF', '#FFFFFF'],
        59.99
    )
    return <>
        <div className="carrousel">{product1.makeCarrousel}
        {product1.makeCarrousel()}
        {product1.makeCarrousel()}
        {product1.makeCarrousel()}
        </div>
    </>
}