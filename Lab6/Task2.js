const products = [
    {Id: 1, name: "earphones", priceInDollars: 20, produserCountry: "China"},
    {Id: 2, name: "powerbank", priceInDollars: 50, produserCountry: "China"},
    {Id: 3, name: "charger", priceInDollars: 10, produserCountry: "Ukraine"},
    {Id: 4, name: "speakers", priceInDollars: 25, produserCountry: "China"},
    {Id: 5, name: "outlet", priceInDollars: 5, produserCountry: "Ukraine"},
    {Id: 6, name: "computer mouse", priceInDollars: 7.99, produserCountry: "Ukraine"},
    {Id: 7, name: "keyboard", priceInDollars: 8, produserCountry: "China"}
];
console.log("Products:");
console.log(products);

let inputProdId = Number(prompt("Введіть ідентифікатор продукту"));
if((inputProdId == Number.NaN) || (inputProdId!= inputProdId.toFixed(0)))
    console.log("The Id is invalid...");
else
    console.log(getProductDetails(products, inputProdId, successCallback, errorCallback));



function getProductDetails(products, productId, successCallback, errorCallback ){
    let foundProduct;
    for(const product of products){
        if(product.Id == productId){
            foundProduct = product;
            break; 
        }
    }          
    if(foundProduct == undefined)
        return errorCallback(productId);            
    else
        return successCallback(foundProduct);  
}

function successCallback(product){
    return `The found product is ${product.name} which costs $${product.priceInDollars} and made in ${product.produserCountry}`;
}
function errorCallback(productId){
    return `The product with id = ${productId} wasn't found...`;
}