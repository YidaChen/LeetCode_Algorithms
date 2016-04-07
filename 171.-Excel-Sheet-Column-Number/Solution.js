/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var outset = "A".charCodeAt()-1;
    var len = s.length;
    var number = 0;
    
    for(var i = 0; i < len; i++){
        number += Math.pow(26,(len-i-1)) * (s.charAt(i).charCodeAt() - outset);
    }
    return number;
};
