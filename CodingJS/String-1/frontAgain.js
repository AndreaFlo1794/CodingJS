function frontAgain(str){
 if (str.length < 2) {
    return false;
  }
  var firstTwo = str.substring(0, 2);
  var lastTwo = str.substring(str.length - 2);
  return firstTwo === lastTwo;
}
}