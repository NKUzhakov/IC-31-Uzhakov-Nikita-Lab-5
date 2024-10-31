let A = getArray("A");
console.log(`Array A: ${A}`);
let B = getArray("B");
console.log(`Array B: ${B}`);

if(A.length!=10 || B.length!=10)
    console.log("Довжина як мінімум 1 масиву не рівна 10");
else{
    let ResultArray = createArray(A, B);
    console.log(`1.1 Результат: ${ResultArray}`);

    let MaxElementIndex = ResultArray.indexOf(Math.max(...ResultArray));
        let tmp = ResultArray[0];
    ResultArray[0] = ResultArray[MaxElementIndex];
    ResultArray[MaxElementIndex] = tmp;
    console.log(`1.2 Результат перестановки: ${ResultArray}`);

    bubbleSort(ResultArray);
    console.log(`2 Результат сортування: ${ResultArray}`);
}
    


function getArray(nameOfArray){
    let userInpur = prompt(`Введіть 10 елементів Array${nameOfArray} через кому`);
    return userInpur.split(/ *, */);
}
function createArray(array1, array2){
    let resultArray = [];
    if(array1.length != array2.length)
        console.log("array1.length != array2.length");
    else{
        for(let i = 0; i< array1.length; i++){
            if(array1[i] == array2[i])                
                resultArray[i] = 1;
            else
                resultArray[i] = 1/(array1[i] - array2[i]);
        }
    }
    return resultArray;
}

function bubbleSort(array){
    let arrayLength = array.length;
    while(arrayLength--)
        {
            let swapped = false;
            
            for(let i = 0; i < arrayLength; i++)
            {
                if(array[i] > array[i + 1])
                {
                    let tmp = array[i];
                    array[i] = array[i + 1];
                    array[i + 1] = tmp;
                    swapped = true;
                }
            }            
            if(swapped == false)
                break;
        }
}