'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const ONE_VALUE_IN_OBJECT = 1;
  let countsObj = {};

  const resObj = {};

  if (Object.keys(robot).length === 0) {
    return {};
  }

  for (const key in robot) {
    if (countsObj[robot[key]] !== undefined) {
      countsObj[robot[key]]++;
    } else {
      countsObj[robot[key]] = ONE_VALUE_IN_OBJECT;
    }

    countsObj = Object.assign(countsObj, countsObj[robot[key]]);
  }

  for (const key in countsObj) {
    if (countsObj[key] > ONE_VALUE_IN_OBJECT) {
      return null;
    } else {
      for (const key2 in robot) {
        resObj[robot[key2]] = key2;
      }
    }
  }

  return resObj;
}

module.exports = inverseRobot;
