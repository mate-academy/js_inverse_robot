'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reversObj = {};

  for (const key in robot) {
    if (reversObj.hasOwnProperty(robot[key])) {
      return null;
    }

    reversObj[robot[key]] = key;
  }

  return reversObj;
}

module.exports = inverseRobot;
