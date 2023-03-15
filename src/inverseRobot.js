'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  for (const value in robot) {
    const isKey = robot[value];

    if (!(`${isKey}` in robot)) {
      robot[isKey] = value;
      delete robot[value];
    } else {
      return null;
    }
  }

  return robot;
}

module.exports = inverseRobot;
