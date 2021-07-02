function Binary(arr1,value) {
    let begin = 0;
    let end = arr1.length -1
    let mid;
    while(begin <= end)
    {
        mid = (begin+end)/2;
        if(arr1[mid]===value)
        {
            return mid;
        }
        else if(value > arr1[mid])
        {
            begin = mid+1;
        }
        else if(value < arr1[mid]){
            end = mid-1;
        }
    }
    return -1;
}

console.log(Binary([1,2,3,4,5,6,7],3))
