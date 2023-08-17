'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const invertedResult = {};

  for (const param in robot) {
    const value = robot[param];
    if (invertedResult[value]) {
      return null;
    }

    invertedResult[value] = param;
  }

  return invertedResult;
}

module.exports = inverseRobot;
