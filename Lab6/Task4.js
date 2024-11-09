const concerts = {
    Київ: new Date("2020-04-01"),
    Умань: new Date("2025-07-02"),
    Вінниця: new Date("2020-04-21"),
    Одеса: new Date("2025-03-15"),
    Хмельницький: new Date("2020-04-18"),
    Харків: new Date("2025-07-10"),
};
console.log("Concerts:");
console.log(Object.entries(concerts));

console.log("Sorted cities where concert hasn't take place:");
const today = new Date();
const futureConcerts = [];
for(const concert of Object.entries(concerts)){
    if(concert[1]>today)
        futureConcerts.push(concert);
}
const sortedFutureConcerts = futureConcerts.sort((concert1, concert2) => concert1[1] - concert2[1]);
const sities = sortedFutureConcerts.map(concert => concert[0]);
console.log(sities);

