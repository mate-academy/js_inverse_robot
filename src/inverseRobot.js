'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const normRobot = {};

  for (const key in robot) {
    const valueOfKey = robot[key];

    if (normRobot.hasOwnProperty(valueOfKey)) {
      return null;
    }

    normRobot[valueOfKey] = key;
  }

  return normRobot;
}

module.exports = inverseRobot;
