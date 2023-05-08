'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const invented = {};

  for (const [key, value] of Object.entries(robot)) {
    if (invented[value] !== undefined) {
      return null;
    }
    invented[value] = key;
  }

  return invented;
}

module.exports = inverseRobot;
