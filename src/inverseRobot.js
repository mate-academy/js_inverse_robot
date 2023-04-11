'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const resultObj = {};
  const entries = Object.entries(robot);

  entries.map(el => el.reverse());

  for (const entry of entries) {
    if (resultObj.hasOwnProperty(entry[0])) {
      return null;
    };

    resultObj[entry[0]] = entry[1];
  }

  return resultObj;
}

module.exports = inverseRobot;
