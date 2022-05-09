const inputData = require('./data.js');

function sonarSweep(depthData) {
  // Creating an object of objects representing each three-measurement window.
  const windowTracker = {};
  for (let i = 0; i < depthData.length; i++) {
    windowTracker[i] = { count: 0, sum: 0 };
  }

  //   loop through depthData
  depthData.forEach((datum) => {
    //   This count makes sure we've used each datum in three windows except the first two and last two data entries.
    let useageCount = 0;

    // for each depth datum loop through all three-measurement windows
    for (let window in windowTracker) {
      // converting the window key to a Number data type
      window = +window;

      if (useageCount < 3 && windowTracker[window].count < 3) {
        /*  
        If less than three bits of data have been added to this window AND current datum has been used less than three times.
        THEN
        Always add the current depth datum to the sum of this window
        Always increment the window's count.
        */
        windowTracker[window].sum += datum;
        windowTracker[window].count++;

        if (window === 0 && windowTracker[0].count === 1) {
          //   if this is the 1st window and it now has a count of 1, add 3 to the useageCount so it skips this window in the next loop as 1st window only has one data entry to it.
          useageCount += 3;
        } else if (window === 1 && windowTracker[1].count === 1) {
          // if this is the 2nd window and it now has a count of 1, we can add 2 to the useageCount so it only loops once more for this window. 2nd window only has 2 entries to it.
          useageCount += 2;
        } else {
          useageCount++;
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
