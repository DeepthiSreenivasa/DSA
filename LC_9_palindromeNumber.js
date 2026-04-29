/**
 * @param {number} x
 * @return {boolean}
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
