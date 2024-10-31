let Country = prompt('Введіть країну доставки');
let Price = Number(prompt('Введіть загальну вартість товару'));
let DeliveryFee = Number(prompt('Введіть вартість доставки товару'));

if((Price == Number.NaN) || (DeliveryFee == Number.NaN))
    console.log('Price або DeliveryFee не є числами');
else
    console.log(getShippingMessage(Country, Price, DeliveryFee));


function getShippingMessage(country, price, deliveryFee){
    return `Shipping to ${country} will cost ${price + deliveryFee} credits.`;
}
