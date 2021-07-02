function bubbleSort(arr1) {
    for (let i = 0; i < arr1.length-1; i++) {
        let noswap = true;
        for(let j=0;j<arr1.length-i;j++)
        {
            if(arr1[j]>arr1[j+1])
            {
                let temp = arr1[j];
                arr1[j] = arr1[j+1];
                arr1[j+1] = temp;
                noswap= false
            }
        }
        if (noswap) {
            break;
        }
        
    }
    return arr1;
}

console.log(bubbleSort([37,45,29,8,12,88,-3]))