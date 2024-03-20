//MultiLevel Inheritance = To create 1 derived class from 1 base class,then again create more derived class from previous derived class.

class Company
{
    constructor()
    {
        this.price;
        this.product;
    }
    setComData(price,product)
    {
        this.price = price;
        this.product = product;
    }
    showComData()
    {
        console.log("Product Price = "+this.price);
        console.log("Product Name = "+this.product);
    }
}
class Factory extends Company
{
    constructor()
    {
        super();
        this.code;
        this.date;
    }
    setFactData(code,date)
    {
        this.code = code;
        this.date = date;
    }
    showFactdata()
    {
        console.log("Product Code = "+this.code);
        console.log("Product Date = "+this.date);
    }
} 
class Market extends Factory
{
    constructor()
    {
        super();
        this.shop;
        this.quantity;
    }
    setMarketData(shop,quantity)
    {
        this.shop = shop;
        this.quantity = quantity;
    }
    showMarketData()
    {
        console.log("Shop Name = "+this.shop);
        console.log("Quantity = "+this.quantity);
    }
}

var m1 = new Market();
m1.setComData(200,"Sev");
m1.setFactData(121,"25 February");
m1.setMarketData("Sanatan Mart",500);
m1.showComData();
m1.showFactdata();
m1.showMarketData();