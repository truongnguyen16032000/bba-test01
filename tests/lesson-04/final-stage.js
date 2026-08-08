function findPairs(){
    let count=0;

// so thu nhat tu 1 den 100
    for (let i=1; i<=100; i++){
        // so thu 2 tu 1 den 100
        for (let j=i; j<=100; j++){
            // kiem tra co chia he cho 17 hay khong 
            if((i+j)%17===0){
                console.log(`(${i} ,${j})`);
                count++;
            }
        }
}
console.log(`Tong so cap so chia het cho 17 la: ${count}`);
}
findPairs();