

//h
console.log(`\nExe 4H`);
FindSecondGreatest = (arr)=>{
    if(arr.length>=2){
       return arr.sort()[1];
    }
    throw Error;
}
FindSecondLowest = (arr)=>{
    if(arr.length>=2){
       return arr.sort().reverse()[1];
    }
   throw Error;
}
FindSecondLowestAndSecondGreatest = (arr)=>{
    return [FindSecondGreatest(arr),FindSecondLowest(arr)];
}
const tmpArr = [1,2,6,8,2,3];
console.log(`${tmpArr} second smallest and second gretest are ${FindSecondLowestAndSecondGreatest(tmpArr)}`);