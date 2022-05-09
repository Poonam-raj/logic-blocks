const inputData = require('./data.js');

function sonarSweep(data) {
  const windowArr = [];
  for (let i = 0; i < data.length; i++) {
    windowArr.push(i);
  }
  let windowSums = {};
  windowArr.forEach((item) => {
    windowSums[item] = { count: 0, sum: 0 };
  });

  data.forEach((datum) => {
    let numCount = 0;

    for (let window in windowSums) {
      window = +window;
      if (numCount < 3 && windowSums[window].count < 3) {
        windowSums[window].count++;
        windowSums[window].sum += datum;
        if (window === 0 && windowSums[0].count === 1) {
          numCount += 3;
        } else if (window === 1 && windowSums[1].count === 1) {
          numCount += 2;
        } else {
          numCount++;
        }
      }
    }
  });
  const objValues = Object.values(windowSums);

  let count = 0;
  for (let i = 1; i < objValues.length; i++) {
    if (objValues[i].sum > objValues[i - 1].sum) {
      count++;
    }
  }
  return count;
}

console.log(sonarSweep(inputData), 'ANSWER');

//1190
