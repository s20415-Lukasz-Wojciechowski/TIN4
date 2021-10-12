

//f
console.log(`\nExe 4F`);
checkPrime = (num)=>{
    if(num==2)
        returntrue;
    else if (num%2==0 || num === 1)
        return false;
    for(i=3;i<Math.floor(Math.sqrt(num));i+=2){
        if(num%i==0)
            return false;
    }
    return true;
}
console.log(`Is 73 a prime number? ${checkPrime(73)}`);
