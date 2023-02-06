// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:


// for(let i = 0; i < array.length; i++){
//     if(array[i] + array[i] === 0)
//     console.log(true) 
//        else {
//             console.log(false)
//         }
//     }

// for(let i = 0; i < array.length; i++){
//     if(array[i] + array[i])
 
//     console.log(i + i)
// }



let value = true
for (let i = 0; i < array.length; i++){
    for (let j = 0; j < array.length; i++){
        if(i !== j){
            if( array[i] + array[j] === 0) {
              console.log(array)
            }
        }
    }
}  