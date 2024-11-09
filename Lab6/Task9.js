const tweets = [
    { id: "000", likes: 5, tags: ["js", "nodejs"] },
    { id: "001", likes: 2, tags: ["html", "css"] },
    { id: "002", likes: 17,tags: ["html", "js", "nodejs"] },
    { id: "003", likes: 8, tags: ["css", "react"] },
    { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
];
console.log("Tweets:");
console.log(tweets);

console.log("All tags:");
const allTags = tweets.flatMap(tweet => tweet.tags);
console.log(allTags);

console.log("The object of distinct tags:");
const distinctTags = allTags.reduce((result, tagName) => {
    if(!result.hasOwnProperty(tagName))        
        result[tagName] = 0;
    result[tagName] += 1;
    return result;
},{});
console.log(distinctTags);