'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reverseData = {};

  for (const key in robot) {
    if (robot[key] in reverseData) {
      return null;
    }
    reverseData[robot[key]] = key;
  }

  return reverseData;
}

module.exports = inverseRobot;
