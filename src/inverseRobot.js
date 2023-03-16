'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reverseRobot = {};

  for (const key in robot) {
    const valueOfKey = robot[key];

    if (reverseRobot.hasOwnProperty(valueOfKey)) {
      return null;
    }

    reverseRobot[valueOfKey] = key;
  }

  return reverseRobot;
}

module.exports = inverseRobot;
