let PricePerDroid = Number(prompt("Введіть ціну за кожен дрон"));
let Quantity = Number(prompt("Введіть кількість замовлених дронів"));
let CustomerCredits = Number(prompt("Введіть вашу суму коштів на рахунку"));

if((PricePerDroid == Number.NaN) || (Quantity == Number.NaN) || (CustomerCredits == Number.NaN))
    console.log('PricePerDroid або Quantity або CustomerCredits не є числами');
else
    console.log(makeTransaction(Quantity, PricePerDroid, CustomerCredits));



function makeTransaction(quantity, pricePerDroid, customerCredits){
    let totalPrice = pricePerDroid * quantity;
    if(totalPrice > customerCredits)
        return "Insufficient funds!";
    else
        return `You ordered ${quantity} droids worth ${totalPrice} credits!`;
    
}