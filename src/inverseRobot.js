'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverseObj = {};
  const repeatedVal = {};

  for (const key in robot) {
    const value = robot[key];

    if (repeatedVal[value]) {
      return null;
    }

    inverseObj[value] = key;
    repeatedVal[value] = true;
  }

  return inverseObj;
}

module.exports = inverseRobot;
