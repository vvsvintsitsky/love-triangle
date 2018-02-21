/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  var triangles = 0;
  var firstOneInterest;
  var secondOneInterest;
  var thirdOneInterest;

  for(i = 0; i < preferences.length; i++) {
    firstOneInterest = preferences[i]; // love interest of the firstOne
    secondOneInterest = preferences[firstOneInterest - 1]; // love interest of the secondOne
    thirdOneInterest = preferences[secondOneInterest - 1]; // love interest of the thirdOne
    
    var areNumbers = (typeof(firstOneInterest) == "number") && (typeof(firstOneInterest) == "number") && (typeof(firstOneInterest) == "number");
    var loveAnother = (preferences[i] != i) && (secondOneInterest != firstOneInterest) && (thirdOneInterest != secondOneInterest);

    if(areNumbers && loveAnother) {
      if(thirdOneInterest-1 == i) {
        triangles++;
        preferences[i] = NaN;
        preferences[firstOneInterest - 1] = NaN;
        preferences[secondOneInterest - 1] = NaN;
      }
      
    }
  } 

  /*for(i = 0; i < preferences.length; i++) {
    firstOneInterest = preferences[i]; // love interest of the firstOne
    if(typeof(firstOneInterest) == "number") {
      if(firstOneInterest != i+1) {
        secondOneInterest = preferences[firstOneInterest - 1];
        if(typeof(secondOneInterest) == "number") {
          if(secondOneInterest != firstOneInterest) {
            thirdOneInterest = preferences[secondOneInterest - 1];
            if(typeof(thirdOneInterest) == "number") {
              if(thirdOneInterest != secondOneInterest) {
                if(thirdOneInterest == i+1) {
                  triangles++;
                  preferences[i] = NaN;
                  preferences[firstOneInterest - 1] = NaN;
                  preferences[secondOneInterest - 1] = NaN;
                }
              } else {
                preferences[i] = NaN;
                preferences[firstOneInterest] = NaN;
                preferences[secondOneInterest] = NaN;
              }
            }
          } else {
            preferences[i] = NaN;
            preferences[firstOneInterest] = NaN;
          }
        }
      } else {
        preferences[i] = NaN;
      }
    }
  }*/

  return triangles;
};