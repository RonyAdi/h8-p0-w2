
// Let's form a sentence
var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it!';

console.log(word+" "+second+" "+third+" "+fourth+" "+fifth+" "+sixth+" "+seventh+".");

console.log("")
//Index accessing - 1 by 1.
var word = 'wow JavaScript is so cool';
var FirstWord = word[0] + word[1] + word[2];
var secondWord; // do your own!
var thirdWord; // do your own!
var fourthWord; // do your own!
var fifthWord; // do your own!

console.log('First Word : ' +word[0]+word[1]+word[2] );
console.log('Second Word: ' +word[4]+word[5]+word[6]+word[7]+word[8]+word[9]+word[10]+word[11]+word[12]+word[13]);
console.log('Third Word : ' +word[15]+word[16]);
console.log('Fourth Word: ' +word[18]+word[19]);
console.log('Fifth Word : ' +word[21]+word[22]+word[23]+word[24]);


console.log("");
//Breaking sentence (again) using substring.
var word        = 'wow JavaScript is so cool';
var FirstWord   = word.substring(0, 3);
var secondWord  = word.substring(4, 14);
var thirdWord   = word.substring(15, 17);
var fourthWord  = word.substring(18, 20)
var fifthWord   = word.substring(21, 25)

console.log('First Word : ' + FirstWord);
console.log('Second Word: ' + secondWord);
console.log('Third Word : ' + thirdWord);
console.log('Fourth Word: ' + fourthWord);
console.log('Fifth Word : ' + fifthWord);

console.log("");
//Breaking sentence (yet Again) and count each length.
var word4 = 'wow JavaScript is so cool';
var FirstWord4  = word.substring(0, 3);
var secondWord4 = word.substring(4, 14);
var thirdWord4  = word.substring(15, 17)
var fourthWord4 = word.substring(18, 20)
var fifthWord4  = word.substring(21, 25)

var firstWordLength   = FirstWord4.length;
var secondWordlength  = secondWord.length;
var thirdWordlength   = thirdWord4.length;
var fourthWordlength  = fourthWord4.length;
var fifthWordlength   = fifthWord4.length;
// create new variables around here

console.log('First Word : ' + FirstWord + ', with length: ' + firstWordLength);
console.log('Second Word: ' + secondWord + ', with length: ' + secondWordlength);
console.log('Third Word : ' + thirdWord + ', with length: ' + thirdWordlength);
console.log('Fourth Word: ' + fourthWord + ', with length ' + fourthWordlength);
console.log('Fifth Word : ' + fifthWord + ', with length ' + fifthWordlength);

