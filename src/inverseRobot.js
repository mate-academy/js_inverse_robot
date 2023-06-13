'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const INITIAL_COUNT = 1;
  const countsObj = {};

  const resObj = {};

  if (Object.keys(robot).length === 0) {
    return {};
  }

  for (const [key, value] of Object.entries(robot)) {
    if (countsObj[value] !== undefined) {
      countsObj[value]++;
    } else {
      countsObj[value] = INITIAL_COUNT;
    }

    if (countsObj[value] > INITIAL_COUNT) {
      return null;
    } else {
      resObj[value] = key;
    }
  }

  return resObj;
}

module.exports = inverseRobot;
