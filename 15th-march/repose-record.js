const convertDataPromise = require('./converted-data');

async function orderTheData() {
  const observationsArr = await convertDataPromise().then(
    (response) => response,
  );
  observationsArr.sort((a, b) => {
    return new Date(a['timestamp']) - new Date(b['timestamp']);
  });
}
function findSleepiestGuard(guardData) {
  let Id = null;
  // find amount of time slept for each guard
  // 00:45 - 00:19 = time spent doing whatever the info at 00:19 was
  // only while yyy-mm-dd is the same
  let leadingDate = '';
  guardData.forEach((log, i) => {
    const date = log.timestamp.split(' ')[0];
    if (i === 0) {
      leadingDate = date;
    }
    if (date === leadingDate) {
      console.log('this matches ', log);
    } else {
      leadingDate = date;
    }
  });

  // find guard who slept most

  guardData.forEach((guardDatum) => {
    let num = guardDatum.info.match(/\d+/);
    if (num !== null) Id = +num;
  });

  return Id;
}
module.exports = { orderTheData, findSleepiestGuard };

/*
TO DO LIST:
- Order data ✅
- Find Guard with most sleep
- Find minute with most sleep of this guard
- multiple guard ID with the minute


*/
