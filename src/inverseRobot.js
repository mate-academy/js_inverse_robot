'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const truePosition = {};

  for (const key in robot) {
    if (truePosition.hasOwnProperty(robot[key])) {
      return null;
    }

    truePosition[robot[key]] = key;
  }

  return truePosition;
}

module.exports = inverseRobot;
