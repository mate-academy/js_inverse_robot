'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const newRobot = {};
  const seenKeys = {};

  for (const key in robot) {
    if (seenKeys.hasOwnProperty(robot[key])) {
      return null;
    }
    seenKeys[robot[key]] = true;
    newRobot[robot[key]] = key;
  }

  return newRobot;
}

module.exports = inverseRobot;
