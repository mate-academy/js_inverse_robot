'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const swappedObj = {};

  for (const key in robot) {
    const value = robot[key];

    if (swappedObj.hasOwnProperty(value)) {
      return null;
    }
    swappedObj[value] = key;
  }

  return swappedObj;
}

module.exports = inverseRobot;
