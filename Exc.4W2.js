// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

var hari = 21; var bulan = 1; var tahun = 1945;

switch(bulan) {
  case 1  : { console.log ("21 Januari 1945"); break; }
  case 2  : { console.log ("21 Februari 1945"); break; }
  case 3  : { console.log ("21 Maret 1945"); break;  }
  case 4  : { console.log ("21 April 1945"); break; }
  case 5  : { console.log ("21 Mei 1945"); break;  }
  case 6  : { console.log ("21 Juni 1945"); break;  }
  case 7  : { console.log ("21 Juli 1945"); break;  }
  default:  { console.log ("tidak ada data"); break; }
  
}



// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

// Skeleton Code / Code yang dicontohkan yang perlu diikuti dan dimodifikasi
var tanggal; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)