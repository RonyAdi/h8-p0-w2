// Buatlah sebuah fungsi dengan nama balikString. Fungsi ini akan menerima argumen sebuah string dan mengembalikan kebalikannya.

// Example
// //input "hello world!"
// //output
// "!dlrow olleh"

function balikString() {
    var arr = [];
    var kata = 'hello world!'
    for (var i = kata.length-1; i >= 0; i--){
        arr = arr + kata[i]
    }
    return arr;
}
console.log(balikString());