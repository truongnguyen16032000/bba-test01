//BAI 1 
function createCharacter() {
    // khai bao doi tuong characters
const characters=[
    {
    name: "Moon Kingdom1",
    level: 1,
    health: 100
    },
    {
    name: "Moon Kingdom2",
    level: 2,
    health: 200
    },
    {
    name: "Moon Kingdom3",
    level: 3,
    health: 500
    }
];
// su dung ham map de tao ra mang moi
const charactersPowerUp = characters.map(character => {
    return {
    name : character.name.toUpperCase(),
    level : character.level *2 ,
    health : character.health *3 ,
    };
});
console.log("List cac phan tu charactersPowerUp:", charactersPowerUp);

// dung filter de loc cac nhan vat có heath>1000
const possibleWinners = charactersPowerUp.filter(character => character.health > 1000);
console.log("Cac phan tu co chi so health > 1000:", possibleWinners);
};
createCharacter();

// BAI 2
function printLeaderboard ()
{
const players=[
    {
        name:"Mario",
        score: 1000
    },
    {
        name:"Mario1",
        score: 2000
    },
    {
        name:"NguyenTruong",
        score: 3000
    }
];
//sap xep mang players theo score giam dan
const sortPlayers=players.sort((a, b) => b.score - a.score);

// in ra bang xep hang và them huy chuong tuong ung 1,2,3
console.log("Bang xep hang:");
sortPlayers.forEach((player, index) => {
    let medal = "";
    if (index === 0) {
        medal = "🥇";
    } else if (index === 1) {
        medal = "🥈";
    } else if (index === 2) {
        medal = "🥉";
    }
     console.log(`${medal} ${index + 1}. ${player.name} - ${player.score}`);

});
};
printLeaderboard();
