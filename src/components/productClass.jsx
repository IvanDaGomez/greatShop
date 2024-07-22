
//import Chosen from './chosenClass.jsx'

export default class Products {
    constructor(name, image, description, price, variants, salePrice = price, cart=false, like=false) {
        this.name = this.toTitles(name);
        this.image = image;
        this.description = description;
        this.price = price;
        this.variants = variants;
        this.salePrice = salePrice;
        this.cart=cart;
        this.like=like;
    }

    toTitles(s) {
        return s.replace(/\w\S*/g, function (t) {
            return t.charAt(0).toUpperCase() + t.substr(1).toLowerCase();
        });
    }

    makeCard() {
        let colorVariants = this.variants.filter(variant => variant.includes("#"));
        
        let nameOfClass;
        let discountPercentage = '';
        if (this.salePrice !== this.price) {
            nameOfClass = "card oferta zoom";
            discountPercentage = Math.ceil(((1 - this.salePrice / this.price) * 100).toFixed(2) / 5) * 5 + '% Off';
        } else {
            nameOfClass = "card zoom";
        }
        return (
            <div className={nameOfClass} style={{ '--discount-percentage': `"${discountPercentage}"` }}>
                <div className="separar">
                    <svg className="like" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={(this.like)?"#000000":"none"}>
                        <path d="M19.4626 3.99415C16.7809 2.34923 14.4404 3.01211 13.0344 4.06801C12.4578 4.50096 12.1696 4.71743 12 4.71743C11.8304 4.71743 11.5422 4.50096 10.9656 4.06801C9.55962 3.01211 7.21909 2.34923 4.53744 3.99415C1.01807 6.15294 0.221721 13.2749 8.33953 19.2834C9.88572 20.4278 10.6588 21 12 21C13.3412 21 14.1143 20.4278 15.6605 19.2834C23.7783 13.2749 22.9819 6.15294 19.4626 3.99415Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    <svg className="cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
                        <path d="M8 16L16.7201 15.2733C19.4486 15.046 20.0611 14.45 20.3635 11.7289L21 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M6 6H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <circle cx="6" cy="20" r="2" stroke="currentColor" strokeWidth="1.5" />
                        <circle cx="17" cy="20" r="2" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M8 20L15 20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <path d="M2 2H2.966C3.91068 2 4.73414 2.62459 4.96326 3.51493L7.93852 15.0765C8.08887 15.6608 7.9602 16.2797 7.58824 16.7616L6.63213 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </div>
                <img className="imagenescarta" src={this.image} alt="Product Image" />
                <h2>{this.name}</h2>
                
                <h2>{(this.price === this.salePrice) ? <><p>${this.price}</p></> : <><p><small><s>${this.price}</s></small></p> <p>${this.salePrice}</p></>}</h2>
                <button className="boton carta">More</button>
                
                <div className="color-variants">
                    {colorVariants.map((color, index) => (
                        <div key={index} className="paleta color" style={{ backgroundColor: color }}></div>
                    ))}
                </div>
            </div>
        );
    }

    makeSmallCard() {
        
        
        let nameOfClass;
        let discountPercentage = '';
        if (this.salePrice !== this.price) {
            nameOfClass = "card oferta pequeña zoom";
            discountPercentage = Math.ceil(((1 - this.salePrice / this.price) * 100).toFixed(2) / 5) * 5 + '% Off';
        } else {
            nameOfClass = "card pequeña zoom";
        }

        return (
            <div className={nameOfClass} style={{ '--discount-percentage': `"${discountPercentage}"` }}>
                <img className="imagenescarta" src={this.image} alt="Product Image" />
                <h2>{this.name}</h2>
                
                <h2>{(this.price === this.salePrice) ? <><p>${this.price}</p></> : <><p><small><s>${this.price}</s></small></p> <p>${this.salePrice}</p></>}</h2>
                
                
            </div>
        );
    }
    makeInfiniteSlider(){
        return (
            <>
                <div className="infinite">
                    <img src={this.image} alt="Infinite" />
                    <p>{this.salePrice}</p>
                </div>
            </>
        )
    }
    makeCarrousel(){
        return(
            <>
                <div className="carrousel">
                    <img src={this.image} alt="" />
                </div>
            </>

        )
    }
    addToCart(){
        //const cartLink = "/cart.json";

}
}