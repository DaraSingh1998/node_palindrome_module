function checkPalindrom(str) {
  if (str == str.split('').reverse().join('')) {
    return true;
  }
  else {
    return false;
  }
}
module.exports=checkPalindrom;
