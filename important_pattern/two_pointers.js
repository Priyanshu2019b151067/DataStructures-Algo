function unique_values(arr1) {
    if (arr1.length === 0) return 0
    let uniques =[]
    let i = 0;
    let j = 1;
    uniques[i] = arr1[0]
    while(j!==arr1.length)
    {
        if(arr1[i]!==arr1[j])
        {
            i += 1;
            arr1[i] = arr1[j]
            uniques.push(arr1[j])
        }
        j= j+1
    }

    return i+1;
}

console.log(unique_values([1,1,1,2,3,3,4,4,5,6]))
console.log(unique_values([]))
