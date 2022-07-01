function smallestMultiple(num) {
  let finalMultiple = 1;

  let isSmallestMultiple = false;

  for (let multipleSearch = 1; !isSmallestMultiple; multipleSearch++) {
    let isDivisibleByAll = true;
    for (let countdown = num; countdown > 0; countdown--) {
      if (multipleSearch % countdown !== 0) {
        isDivisibleByAll = false;
      }
    }

    if (isDivisibleByAll) {
      finalMultiple = multipleSearch;
      isSmallestMultiple = true;
    }
  }

  return finalMultiple;
}

// console.log(smallestMultiple(20)); //232792560
module.exports = smallestMultiple;
