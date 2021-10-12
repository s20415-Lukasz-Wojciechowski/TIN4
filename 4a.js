//a
//expression
console.log(`Exe 4A`);
const factorialRecursion = (a)=>{
    if(a<0)
        throw SyntaxError;
    else if(a==0)
     return 1;
    else
        return factorialRecursion(a-1)*a;
}
console.log(`5! is equal ${factorialRecursion(5)}`);

//declaration
function factorialIteration(a) {
    if(a<0)
        return SyntaxError;    
    let fac=1;
    for(i=a;i>0;i--){
        fac*=i;
    }
    return fac;
}
console.log(`7! is equal ${factorialIteration(7)}`);