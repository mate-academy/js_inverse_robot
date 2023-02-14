'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const resObj = {};

  for (const key in robot) {
    if (resObj.hasOwnProperty(robot[key])) {
      return null;
    }

    resObj[robot[key]] = key;
  }

  return resObj;
}

module.exports = inverseRobot;
