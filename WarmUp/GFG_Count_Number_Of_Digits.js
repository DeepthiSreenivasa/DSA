/*
 * 
 * Author: Deepthi S
 * Notes :
 * 
 * Math.abs => convert every number to positive number
 * Math.floor=>Round the number to lowest
 * Math.ciel=> Round the number to highest
 * Math.round=>Round the number to lower(when <=0.4) or higher(when >=0.5) 
 * 
 */
//Re-did on 12th Aug 2026 , re did on 19th Aug

function countDigit(num) {

    let count = 0;

    if (num === 0) return 1;

    num =  Math.abs(num);

    while (num > 0) {
        num = Math.floor(num / 10);
        count++
    }
    return count;
}

const result = countDigit(-989);
console.log(result);
