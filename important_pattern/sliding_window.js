// naive approach
function larger_sliding_sum(arr1,num) {
    if(num>arr1.length)
    {
        return null;
    }
    let maxi = -Infinity;
    for (let index = 0; index < arr1.length-num+1; index++) {
        let temp =0
        for (let i = 0; i < num; i++) {
            temp += arr1[index+i];
        }
        if(temp>maxi)
        {
            maxi=temp;
        }
    }
    return maxi;
}

// console.log(larger_sliding_sum([1,2,3,4,5,6,11,12,8,9,10],3))






function sliding_window(arr1,num) {
    if(num>arr1.length)
    {
        return null;
    }
    else
    {
        let tempsum = 0;
        let maxsum = 0;
        for(let i = 0;i<num;i++)
        {
            maxsum += arr1[i];
        }
        tempsum = maxsum;
        for(let i=num;i<arr1.length;i++)
        {
            tempsum = tempsum -arr1[i-num] + arr1[i];
            if(tempsum>maxsum)
            {
                maxsum = tempsum;
            }
        }
        return maxsum;
    }
}
console.log(sliding_window([1,2,3,4,5,6,11,12,8,9,10],3))