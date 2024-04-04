'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverseObj = {};

  for (const oldKey in robot) {
    const value = oldKey;
    const newKey = robot[value];

    if (inverseObj.hasOwnProperty(newKey)) {
      return null;
    }

    inverseObj[newKey] = value;
  }

  return inverseObj;
}

module.exports = inverseRobot;
