function Selection_Sort(arr1) {

    for(let i =0;i<arr1.length-1;i++)
    {
        let min = arr1[i];
        for(let j = i+1; j< arr1.length;j++)
        {
            if(arr1[j] < min)
            {
                min = arr1[j];
            }
        }
        let k =  arr1.indexOf(min);
        if(i!==k)
        {
            let temp = arr1[i];
            arr1[i]= min;
            arr1[k] = temp;
        }
       
    }
    return arr1;
}


// sir solution
function Sir_Selection_Sort(arr1) {

    for(let i =0;i<arr1.length-1;i++)
    {
        let min = i;
        for(let j = i+1; j< arr1.length;j++)
        {
            if(arr1[j] < arr1[min])
            {
                min = j; 
            }
        }
        if(i!==min)
        {
            let temp = arr1[i];
            arr1[i]= arr1[min];
            arr1[min] = temp;
        }
        
    }
    return arr1;
}

console.log(Sir_Selection_Sort([-3,4,45,29,8,12,88,-10]))