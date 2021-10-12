//e
console.log(`\nExe 4E`);
findLongestWord = (string)=>{
    return string.split(" ").sort((a,b)=>b.length-a.length)[0];
}
console.log(`The Longest Word :\nAla ma kota = ${findLongestWord("Ala ma kota")}`);