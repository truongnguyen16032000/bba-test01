let playerNam="Maro";
let currentLive= "3";
const level1=25;
const level2=30;
const level3=45;

//  tinh tong cua 3 level
function tinhtong (level1, level2, level3){
    console.log ("Tong cua 3 level la: " + (level1 + level2 + level3));
}
tinhtong(level1, level2, level3);
//  tinh trung binh cong cua 3 level
function tinhtrungbinh (level1, level2, level3){
    console.log ("Trung binh cong cua 3 level la: " + ((level1 + level2 + level3)/3));
}
tinhtrungbinh(level1, level2, level3);
//in ra so du coi khi tong chia het cho 3
function sodu (level1, level2, level3){
    console.log ("So du khi tong chia het cho 3 la: " + ((level1 + level2 + level3)%3));
}
sodu(level1, level2, level3);