'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/
function inverseRobot(robot) {
  const resObj = {};

  for (const key in robot) {
    if (robot[key] in resObj) {
      return null;
    }
    resObj[robot[key]] = key;
  }

  return resObj;
}
module.exports = inverseRobot;
