function Insertion_Sort(arr1) {
    for(let i=1;i<arr1.length;i++)
    {
        let key = arr1[i];
        let j = i-1;
        while(j>=0 && key < arr1[j])
        {
            arr1[j + 1] = arr1[j] 
            j -= 1
        }
        arr1[j+1] = key;
    }
    return arr1
}
console.log(Insertion_Sort([-3,4,45,29,8,12,88,-10]))