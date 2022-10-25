'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverseObj = {};

  for (const key in robot) {
    const objKey = key;
    const objValue = robot[key];

    if (inverseObj.hasOwnProperty(objValue)) {
      return null;
    }

    inverseObj[objValue] = objKey;
  }

  return inverseObj;
}

module.exports = inverseRobot;
