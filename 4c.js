
//c 
console.log(`\nExe 4C`);
checkPalindrome = (string)=>{
    if(string.toLowerCase() == (string.split("").reverse().join("").toLowerCase())){
        return true;
    }
    return false;    
}
console.log(`Is 'Ala' a palindrome? ${checkPalindrome("Ala")}`);
