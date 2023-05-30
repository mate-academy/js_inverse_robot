'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const resultRobot = {};

  for (const key in robot) {
    if (resultRobot[robot[key]] !== undefined) {
      return null;
    }

    resultRobot[robot[key]] = key;
  }

  return resultRobot;
}

module.exports = inverseRobot;
