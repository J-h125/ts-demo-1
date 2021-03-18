
interface Person{
    gender:string
}
function merry(a:Person,b:Person):[Person,Person]{
    if(a.gender!==b.gender){
        return [a,b]
    }else{
        throw new Error('性别不同')
    }

}

// function selectSort(a:number[]):number[]{
//     for(let i =0;i<a.length-1;i++){
//         let minIndex = i
//         for(let j = i+1;j<a.length;j++){
//             if(a[j]<a[minIndex]){
//                 minIndex = j
//             }
//         }
//         let temp = a[minIndex]
//         a[minIndex] = a[i]
//          a[i] = temp
//     }
//     return a
// }
// let res = selectSort([2,3,4,6,1,2])
// console.log(res)

// function minus(a:number,b:number):number{
//     return a-b
// }
// let res = minus(3,4)
// console.log(res)



// function min(a:number,b:number):number{
//     if(a<b){
//         return a
//     }else{
//         return b
//     }
// }
// let result = min(3,5)
// console.log(result)