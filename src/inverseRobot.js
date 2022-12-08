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

      return null;
    }

    result[property] = key;
  }

  return result;
}

module.exports = inverseRobot;
