const inputData = require('./data.js');

function sonarSweep(depthData) {
  // Creating an object of objects. Each object within is for each data entry of depth from the sonar
  let windowTracker = {};
  for (let i = 0; i < depthData.length; i++) {
    windowTracker[i] = { count: 0, sum: 0 };
  }

  //   loop through depthData
  depthData.forEach((datum) => {
    //   This count is needed because every depthData entry is present in three measurement windows EXCEPT the first two and last two data entries. This count makes sure we've utilised the data to the right amount.
    let numCount = 0;

    // for each depth datum loop through every key inside windowSums obj
    for (let window in windowTracker) {
      // converting the window key to a Number data type
      window = +window;

      if (numCount < 3 && windowTracker[window].count < 3) {
        /*  
        If we have not passed three uses of the datum (the count starts at 0 for three uses we will have a count of 2) 
        AND the current window has a count of less than three (aka less than three bits of data have been added to this window)
        
        THEN
        Always increment the window's count as we're looping through again.
        Always add the current depth datum to the sum of this window

        */
        windowTracker[window].count++;
        windowTracker[window].sum += datum;

        if (window === 0 && windowTracker[0].count === 1) {
          //   if the window's key is 0 (1st window) and it now has a count of 1, we can add three to the numCount so it skips this window in future as it has now capped the number of windows it needs. 1st window only has one data entry to it.
          numCount += 3;
        } else if (window === 1 && windowTracker[1].count === 1) {
          // if the window's key is 1 (2nd window) and it now has a count of 1, we can add 2 to the numCount so it only loops once more for this window. 2nd window only has 2 entries to it.
          numCount += 2;
        } else {
          numCount++;
        }
      }
    }
  });

  // make an array of only the nested objects within the windowTracker
  const windowValues = Object.values(windowTracker);
  let count = 0;
  for (let i = 1; i < windowValues.length; i++) {
    //   loop through the array of objs but only from the second element as we're comparing the current window's sum to the previous window. Checking if there's an increase from the last element and counting if true.
    if (windowValues[i].sum > windowValues[i - 1].sum) {
      count++;
    }
  }
  return count;
}

console.log(sonarSweep(inputData), 'ANSWER');

//1190
