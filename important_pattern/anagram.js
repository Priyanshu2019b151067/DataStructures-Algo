// two strings given check they are anagram or not
// let name= "Priyanshu"
// for (const val of name) {
//     console.log(val)
// }
function anagram(str11,str22) {
    str1 = str11.toLowerCase() 
    str2 = str22.toLowerCase()
    if(str1.length !== str2.length)
    {return false;}
    else{
        let frequency_counter1 ={}
        let frequency_counter2 = {}
        for (const val of str1) {
            frequency_counter1[val] = (frequency_counter1[val] || 0) + 1
        }
        for (const val of str2) {
            frequency_counter2[val] = (frequency_counter2[val] || 0) + 1
        }
        for(let key in frequency_counter1)
        {
            if(frequency_counter1[key]!==frequency_counter2[key])
            {
                return false;
            }
        }
    }
    return true;
}


// console.log(anagram("Tar","Rat"))


// function anagram_teacher(str11,str22) {
//     str1 = str11.toLowerCase() 
//     str2 = str22.toLowerCase()
//     if(str1.length !== str2.length)
//     {return false;}
//     else{
//         let frequency_counter1 ={};
//         for (const val of str1) {
//             frequency_counter1[val] = (frequency_counter1[val] || 0) + 1
//         }
//         for(let i =0 ;i<str2.length;i++)
//         {
//             let letter = str2[i]
//             if(!frequency_counter1[letter])
//             {
//                 return false;
//             }
//             else{
//                 frequency_counter1[letter] -= 1;
//             }
//         }
       
//     }
//     return true;
// }