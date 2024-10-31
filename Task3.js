let Array1 = getArray(1);
console.log(`Array1: ${Array1}`);
let Array2 = getArray(2);
console.log(`Array2: ${Array2}`);
let MaxLength = Number(prompt(`Введіть максимальну довжину масиву-результату`));
console.log(`MaxLength = ${MaxLength}`);

if(MaxLength == Number.NaN)
    console.log("MaxLength не є числом");
else
    console.log(`Результат: ${makeArray(Array1, Array2, MaxLength)}`);



function getArray(numOfArray){
    let userInpur = prompt(`Введіть елементи Array${numOfArray} через кому`);
    return userInpur.split(/ *, */);
}
function makeArray(firstArray ,secondArray ,maxLength ){
    let uniteArray = [...firstArray, ...secondArray];
    if(uniteArray.length> maxLength)
        return uniteArray.slice(0, maxLength);
    return uniteArray;
}