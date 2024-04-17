the_string = "Helloworld"

// reverse a string
function reverse_string(string){
    elm = string.split("").reverse().join("")
    console.log(elm)
}
reverse_string(the_string)

// Count Charactres
function count_charactres(string){
    for (let i=0; i<string.length ; i++){
        var number_of_characters =+ i
    }
    console.log(number_of_characters)
}
count_charactres(the_string) 

the_string2 = "thank you imen for teaching us how to code"
//Capitalize Words 
function capitalize_words(string){
    var words = string.split(" ")
    var arr_new_words= []
    for (let elm of words ){
        elm = elm.charAt(0).toUpperCase() + elm.slice(1)
        arr_new_words.push(elm)
    }
    console.log(arr_new_words.join(" "))
}
capitalize_words(the_string2)

