// raw data exported as arr of objs

const fs = require('fs/promises');
async function convertDataPromise() {
  let finalData;
  await fs
    .readFile('15th-march/data.txt', 'utf8')
    .then((data) => {
      const rawData = data;
      const dataArr = rawData.split('\n');
      let arrOfObjs = [];
      dataArr.forEach((datum) => {
        let infoSplit = datum.split('] ');
        let cleanTimeStamp = infoSplit[0].split('[');
        infoSplit[0] = cleanTimeStamp[1];

        const innerObj = {};
        innerObj.timestamp = infoSplit[0];
        innerObj.info = infoSplit[1];

        arrOfObjs.push(innerObj);
        finalData = arrOfObjs;
      });
    })
    .catch((err) => {
      console.log(err);
    });
  return finalData;
}

module.exports = convertDataPromise;
