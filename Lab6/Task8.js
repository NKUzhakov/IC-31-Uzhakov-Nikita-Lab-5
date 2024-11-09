const goods = ["apple", "banana", "mango"];
const newStorage = new Storage(goods);
console.log("Initial items:");
console.log(goods);

console.log("We can use getItems() method to get goods");
console.log(newStorage.getItems());

console.log("We can add the item 'orange' using addItem()");
newStorage.addItem('orange');
console.log(newStorage.getItems());

console.log("We can successfuly remove 'apple' using removeItem()");
newStorage.removeItem('apple');
console.log(newStorage.getItems());

console.log("But we can't remove 'watermelone'");
newStorage.removeItem('watermelone');
console.log(newStorage.getItems());


function Storage(itemsArray){
    this.items = Array.from(itemsArray);

    this.getItems = ()=> Array.from(this.items);
    this.addItem = function(item){
        this.items.push(item);
    };
    this.removeItem = function(item){
        let deleteIndex = this.items.indexOf(item);
        if(deleteIndex>=0)
            this.items.splice(deleteIndex, 1); 
    };    
}