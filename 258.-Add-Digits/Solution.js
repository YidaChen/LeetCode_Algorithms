/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    var str = num.toString();
    var i = str.length;
    var sum = 0;

    while(i--){
        sum += parseInt(str.charAt(i));
    }
    if(sum >= 10){
        sum = addDigits(sum);
    }
    return sum;
};
