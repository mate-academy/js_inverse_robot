'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverseObject = {};

  for (const key in robot) {
    inverseObject[robot[key]] = key;
  }

  const countKeyPassedObject = Object.keys(robot).length;
  const countKeyResult = Object.keys(inverseObject).length;

  if (countKeyPassedObject > countKeyResult) {
    return null;
  }

  return inverseObject;
}

module.exports = inverseRobot;
