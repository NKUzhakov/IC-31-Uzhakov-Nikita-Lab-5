const medicines = [
    { name: "Noshpa", price: 170 },
    { name: "Analgin", price: 55 },
    { name: "Quanil", price: 310 },
    { name: "Alphacholine", price: 390 },
];

console.log("All medicines:");
console.log(medicines);

console.log("Medicines with discount:");
let discounted = makeDiscount(medicines);
console.log(discounted);

console.log("Medicines with Id:");
let medWithId = addId(discounted);
console.log(medWithId);


function makeDiscount(medicines){
    return medicines.map(item => {
        const newItem = Object.assign({}, item);
        if(newItem.price>300)
            newItem.price *= 0.7;                    
        return newItem;
    });
}
function addId(medicines){
    return medicines.map((item, index) => {
        const newItem = Object.assign({}, item);
        newItem.Id = index + 1;
        return newItem;
    });
}
