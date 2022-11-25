'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newInverseRobot = {};

  for (const key in robot) {
    if (!newInverseRobot.hasOwnProperty(robot[key])) {
      newInverseRobot[robot[key]] = key;
    } else {
      return null;
    }
  }

  return newInverseRobot;
}

module.exports = inverseRobot;
