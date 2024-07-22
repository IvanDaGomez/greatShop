

export default class Chosen{
    constructor(name, variant, price, salePrice=price,count,image,selected){
        this.name=name;
        this.variant=variant;
        this.price=price;
        this.salePrice=salePrice;
        this.count=count;
        this.image=image;
        this.selected=selected;
    }

    
}