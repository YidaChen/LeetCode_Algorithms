/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var obj = {};
    
    if(s.length !== t.length){
        return false;
    }
    for(var i = 0; i < s.length; i++){
        if(!obj[s.charAt(i)]){
            obj[s.charAt(i)] = 1;
        }else{
            obj[s.charAt(i)]++;
        }
    }
    for(i = 0; i < t.length; i++){
        if(typeof obj[t.charAt(i)] === 'undefined' || --obj[t.charAt(i)] < 0){
            return false;
        }
    }
    return true;
};
