'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const rightValues = {};

  for (const key in robot) {
    const keyRightValues = robot[key];

    if (keyRightValues in rightValues) {
      return null;
    }

    rightValues[keyRightValues] = key;
  }

  return rightValues;
}

module.exports = inverseRobot;

module.exports = inverseRobot;
