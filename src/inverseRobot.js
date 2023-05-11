'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const invertedRobot = {};

  for (const key in robot) {
    const valueRobot = robot[key];

    if (invertedRobot.hasOwnProperty(valueRobot)) {
      return null;
    }

    invertedRobot[valueRobot] = key;
  }

  return invertedRobot;
}

module.exports = inverseRobot;
