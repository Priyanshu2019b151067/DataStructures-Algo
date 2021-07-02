// Linear Search

function Linear(arr1,value) {
    for (let index = 0; index < arr1.length; index++) {
        if(arr1[index]===value)
        {
            return index;

        } 
    }
    return -1;
}
console.log(Linear([1,2,3,4,5,6,7],5))