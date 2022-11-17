'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const resultObj = {};

  for (const key in robot) {
    const property = robot[key];

    if (!resultObj[property]) {
      resultObj[property] = key;
    } else {
      return null;
    }
  }

  return resultObj;
}
module.exports = inverseRobot;
