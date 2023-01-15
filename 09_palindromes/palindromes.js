const palindromes = function (string) {
    let lc = string.toLowerCase();
    let punct = lc
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g, "")
    .replace(/\s{2,}/g, " ")
    .replace(/ /g,'');
    
    const stringArray = punct.split("");
    const revStringArr = stringArray.reverse();
    let revString = revStringArr.join("");

    if (revString === punct) {
        return true;
    }
    else
        return false;


};

// Do not edit below this line
module.exports = palindromes;
