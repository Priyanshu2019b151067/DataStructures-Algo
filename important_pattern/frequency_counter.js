// frequency calculator 
// two array of equal size are required\
// this is a naive approach
function same(arr1,arr2) {
    let output = true;
    if(arr1.length!==arr2.length)
    {
        output = false;
    }
    else
    {
        arr1.forEach(element => {
            if(!(arr2.includes(element*element)))
            {
                output = false;
            }
        });
    }
    return output;
}

// console.log(same([1,2,3],[4,4,1]))



// #################################Frequency Counetr using JS objects ##################
function same_with_objects(arr1,arr2) {
    if(arr1.length !== arr2.length)
    {
        return false;
    }
    else{
        let frequency_counter1 ={}
        let frequency_counter2 ={}
        for (const val of arr1) {
            frequency_counter1[val] = (frequency_counter1[val] || 0) + 1
        }
        for (const val of arr2) {
            frequency_counter2[val] = (frequency_counter2[val] || 0) + 1
        }
        for (const key in frequency_counter1) {
            if(!(key**2 in frequency_counter2)){
                return false;
            }
            if((frequency_counter2[key**2] !== frequency_counter1[key]))
            {
                return false;
            }
        }

    }
    return true
}

console.log(same_with_objects([1,2,3],[4,9,1]))