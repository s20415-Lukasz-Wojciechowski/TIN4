
//i
console.log(`\nExe 4I`);

amountToCoins = (num,arr)=>{
    const tmpArr = arr.sort((a,b)=>(b-a));
    let val = num;
    const res = [];
    let i = 0;
    while(val>0){
        if(val-tmpArr[i]>=0){
            val-=tmpArr[i];
            res.push(tmpArr[i]);
        }
        else
            i++;
    }
    return res;
}
console.log(amountToCoins(46, [25, 10, 5, 2, 1]));
