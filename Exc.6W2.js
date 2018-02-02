// 1. MELAKUKAN LOOPING DENGAN MENGGUNAKAN WHILE
console.log("LOOPING PERTAMA");
var counter = 2;
var limit = 20;
var increment = 2;
while( counter <= limit ) {
  console.log(counter+" - I love coding");
  counter += increment;
}


console.log('');
console.log("LOOPING KEDUA");

var counter = 20;
var limit = 2;
var decrement = 2;
while ( counter >= limit ) {
  console.log(counter+' - I will become fullstack developer');
  counter -= decrement;
}


// 2. MELAKUKAN LOOPING DENGAN MENGGUNAKAN FOR
console.log("");
console.log('LOOPING PERTAMA');
var counter = 1;
var limit = 20;
var increment = 1;
for ( counter; counter <= limit; counter +=increment ) {
  console.log(counter+' - I love coding');
}

console.log('');
console.log('LOOPING KEDUA');
var counter = 20;
var limit = 0;
var decrement = 1;
for ( counter; counter > limit; counter -=decrement ) {
  console.log(counter+ ' - I will become fullstack developer');
}

console.log('');
// 3. ANGKA GANJIL DAN GENAP
for ( var i = 1; i <= 100; i++ ) {
  if ( i % 2 === 0) {
    console.log(i+' GENAP');
  } else {
    console.log(i+' GANJIL');
  }
}

console.log('');
for ( var j = 1; j <= 100; j +=2 ) {
  if ( j % 3 === 0 ) {
    console.log(j+' kelipatan 3');
  }
}  

console.log('');
for ( var j = 1; j <= 100; j +=5 ) {
  if ( j % 6 === 0 ) {
    console.log(j+' kelipatan 6');
  }
}

console.log('');
for ( var j = 1; j <= 100; j +=9 ) {
  if ( j % 10 === 0 ) {
    console.log(j+' kelipatan 10');
  }
    
}