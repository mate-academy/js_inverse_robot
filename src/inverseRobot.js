'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  let result = { };

  for (const key in robot) {
    const property = robot[key];

    if (property in result) {
      result = null;

      return result;
    }

    result[property] = key;
  }

  return result;
}

module.exports = inverseRobot;
