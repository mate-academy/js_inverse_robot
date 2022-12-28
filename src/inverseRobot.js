'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newObj = {};

  for (const key in robot) {
    const newKey = robot[key];

    if (newKey in newObj) {
      return null;
    }

    newObj[newKey] = key;
  }

  return newObj;
}

module.exports = inverseRobot;
