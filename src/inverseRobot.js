'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const arrOfKeys = Object.values(robot).reverse();
  const arrOfValue = Object.keys(robot).reverse();
  const inverseObjectRobot = {};

  const lenOfArrays = arrOfKeys.length;

  for (let i = 0; i < lenOfArrays; i++) {
    if (inverseObjectRobot[arrOfKeys[i]]) {
      return null;
    }
    inverseObjectRobot[arrOfKeys[i]] = arrOfValue[i];
  }

  return inverseObjectRobot;
}
module.exports = inverseRobot;
