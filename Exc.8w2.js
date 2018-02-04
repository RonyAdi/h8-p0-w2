
// 1. BUAT FUNCTION shoutOut(), MENGEMBALIKAN NILAI KEMUDIAN MENAMPILKAN DI console.log
function shoutOut(){
  return 'Halo Function!';
}
console.log(shoutOut());


// 2. BUAT FUNCTION calculateMultiply(), MENGEMBALIKAN NILAI DARI PERKALIAN 2 PARAMETER
console.log('');
function calculateMultiply(num1,num2) {
  return num1 * num2;
}
var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian);



// 3. BUAT FUNCTION processSentence(), MEMPROSES SELURUH PARAMETER MENJADI SATU KALIMAT.
console.log('');
function processSentence(name,age,address,hobby) {
return 'Nama saya '+name+', umur saya '+age+' tahun, alamat saya di '+address+', dan saya punya hobby yaitu '+hobby+'!';
}
var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";
var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence);
