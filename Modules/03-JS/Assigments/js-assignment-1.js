function sum(numbersArray){  
    let sum = 0;
    for (let i = 0; i < numbersArray.length; i++) {
        sum = sum + numbersArray[i];
    }
    console.log(sum);
}
sum([1, 2, 3, 4]);
sum([-3, 5, 19, -6]);
