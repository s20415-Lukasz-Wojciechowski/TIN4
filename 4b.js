
console.log(`\nExe 4B`);
//b
FiboNth=(a)=>{
    if(a<0)
        return SyntaxError;
    else if(a==0)
        return 0;
    else if(a==1)
        return 1;
    
    return FiboNth(a-1)+FiboNth(a-2);            
}

console.log(`Fibo 7 =  ${FiboNth(7)}`);