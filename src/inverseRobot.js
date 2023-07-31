'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  for (const oldKey in robot) {
    const value = oldKey;
    const newKey = robot[value];

    if (robot.hasOwnProperty(newKey)) {
      return null;
    }

    robot[newKey] = value;
    delete robot[oldKey];
  }

  return robot;
}

module.exports = inverseRobot;
