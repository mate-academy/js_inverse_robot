'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const result = {};

  for (const parameter in robot) {
    const param = robot[parameter];

    if (result[param]) {
      return null;
    }

    result[param] = parameter;
  }

  return result;
}

module.exports = inverseRobot;
