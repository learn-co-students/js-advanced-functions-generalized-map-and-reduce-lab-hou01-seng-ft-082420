// Add your functions here
const map = (arr, funk) =>{
    let newArr = []
   for(const num of arr){
    newArr.push(funk(num))
   }
   return newArr
}

const reduce = (arr, funk, start) =>{
    // let value = start //with start = 0 in arguments
    // let value
    // if(start){
    //     value = start
    // } else{
    //     value = arr[0]
    // }
    let value = (start) ? start : arr[0]
    let newArr = (start) ? arr : arr.slice(1)
    // let value = (start) ? start : newArr[0]

    for( const obj of newArr){
        value = funk(obj, value)
    }
    return value
}