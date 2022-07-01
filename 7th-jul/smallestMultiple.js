function smallestMultiple(num) {
  // initialising search for smallest multiple
  let smallestMultipleSearch = 1;

  // creating a infinite loop to go as far into the search as we need
  while (smallestMultipleSearch > 0) {
    let isDivisibleByAll = true;
    for (let countdown = num; countdown > 0; countdown--) {
      if (smallestMultipleSearch % countdown !== 0) {
        isDivisibleByAll = false;
        break;
      }
    }

    // if isDivisibleAll hasn't been switched false we have found smallest multiple
    if (isDivisibleByAll) {
      return smallestMultipleSearch;
    }
    smallestMultipleSearch++;
  }
}

module.exports = smallestMultiple;
