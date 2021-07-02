// [-4,-3,-2,0,1,5,6]
function sumzero(arr1) {
    let left = 0;
    let right = arr1.length -1;
    while(left < right)
    {
        sum = arr1[left] + arr1[right];
        if(sum===0)
        {
            return [arr1[left],arr1[right]];
        }
        else if(sum>0)
        {
            right -= 1;
        }
        else
        {
            left +=1;
        }
    }
    return "NOT FOUND"
}

console.log(sumzero([-4,-3,-2,0,1,5,6]))



// unique finder
arr1 = [1,1,1,1,1,2]

// small but efficient
function unique(arr1) {
    const mySet1 = new Set(arr1)
    return mySet1.size
}

console.log(unique(arr1))