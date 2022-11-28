'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const updatedRobot = {};

  for (const key in robot) {
    const newKey = robot[key];
    const newValue = key;

    if (updatedRobot.hasOwnProperty(newKey)) {
      return null;
    }
    updatedRobot[newKey] = newValue;
  }

  return updatedRobot;
}

module.exports = inverseRobot;
