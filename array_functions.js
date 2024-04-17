//arry number
var arr_number = [1,22,50,4,45,9]

//Find max and min 
function min_max(array){
    var min = Math.min.apply(null, array)
    var max = Math.max.apply(null, array)
    console.log("Min number is :",min + " Max number is:",max)
}
 min_max(arr_number) 
 
 //Count the sum
 var total = 0
 function sum(arr){
    for(i=0; i<arr.length ; i++){
        total += 1
    }
    console.log('the sum equal to',total)
 }
sum(arr_number) 

//Filter Array based on condition : type numbr
const arr_type = ["Hi", 4, "robot", 8 , true , false] 
    let elm_fltr = arr_type.filter((elm)=> typeof elm === 'number') 
    console.log('This numbers are the filtred one', elm_fltr)

