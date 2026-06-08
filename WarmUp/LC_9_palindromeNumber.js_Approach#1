/*
 * 
 * Author: Deepthi S
 * Notes :
 * Lin2 25: If else can be jus replaced with this rev == originalNum as end of the day even that would either return true or fasle
 */


var isPalindrome = function(num) {
    
    let originalNum = num;
    let rev=0;

    if(num<0) return false;

    while(num>0){

        lastDigit = num % 10;
        rev = (10*rev) + lastDigit;
        num = Math.floor(num/10);


    }

    return rev == originalNum;

};
