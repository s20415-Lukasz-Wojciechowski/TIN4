
 
//j
//returns an index 
binarySearch = (arr,num)=>{
    arr.sort((a,b)=>a-b);
    let point = Math.floor(arr.length/2);
    if(arr[point] == num ){
        return point;
    }else if(arr[point]<num && arr.length > 1){
       return binarySearch(arr.splice(point,arr.length-1),num)+point
    }else if(arr[point]>num && arr.length > 1){
        return binarySearch(arr.splice(0,point),num)
    }else{
        throw SyntaxError;
    }
}


console.log(binarySearch([1,532,32,1,2,8,6,3,100,7,9],32));