'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const result = {};

  for (const [key, value] of Object.entries(robot)) {
    if (result[value]) {
      return null;
    }

    result[value] = key;
  }

  return result;
}

module.exports = inverseRobot;
