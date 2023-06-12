'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const swappedObj = {};

  for (const key in robot) {
    if (robot.hasOwnProperty(key)) {
      if (swappedObj.hasOwnProperty(robot[key])) {
        return null;
      };
      swappedObj[robot[key]] = key;
    }
  }

  return swappedObj;
}

module.exports = inverseRobot;
