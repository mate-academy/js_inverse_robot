'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverseObj = {};

  for (const key in robot) {
    const newKey = robot[key];

    if (newKey in inverseObj) {
      return null;
    }

    inverseObj[newKey] = key;
  }

  return inverseObj;
}

module.exports = inverseRobot;
