'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const invented = {};

  for (const key in robot) {
    if (invented.hasOwnProperty(robot[key])) {
      return null;
    }

    invented[robot[key]] = key;
  }

  return invented;
}

module.exports = inverseRobot;
