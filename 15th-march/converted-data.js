// raw data exported as arr of objs

const fs = require('fs/promises');

let arrOfObjs = [];
fs.readFile('./data.txt', 'utf8')
  .then((response) => {
    const rawData = response;
    const dataArr = rawData.split('\n');

    dataArr.forEach((datum) => {
      let infoSplit = datum.split('] ');
      let cleanTimeStamp = infoSplit[0].split('[');
      infoSplit[0] = cleanTimeStamp[1];

      const innerObj = {};
      innerObj.timestamp = infoSplit[0];
      innerObj.info = infoSplit[1];

      arrOfObjs.push(innerObj);
    });
  })
  .catch((err) => console.log(err));

module.exports = arrOfObjs;
