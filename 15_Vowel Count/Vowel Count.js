// Description:
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// Solution:
function getCount(str) {
    let vow = /[aeiou]/gi;
     let num = str.match(vow);
    if (num === null) {return 0;}
     else { return num.length;}
  
  }
  console.log(getCount("pear tree"));
  console.log(getCount("tk r n m kspkvgiw qkeby lkrpbk uo thouonm fiqqb kxe ydvr n uy e oapiurrpli c ovfaooyfxxymfcrzhzohpek w zaa tue uybclybrrmokmjjnweshmqpmqptmszsvyayry kxa hmoxbxio qrucjrioli")); 