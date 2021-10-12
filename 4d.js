
//d
console.log(`\nExe 4D`);
orderLetters = (string)=>{
    return string.toLowerCase().split("").sort().join("");
}
console.log(`Is 'Java Script' a palindrome? ${orderLetters("Java Script")}`);