'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const resultObj = {};

  const keys = Object.keys(robot);

  const values = Object.values(robot);

  for (let i = 0; i < keys.length; i++) {
    if (resultObj[values[i]]) {
      return null;
    }
    resultObj[values[i]] = keys[i];
  }

  return resultObj;
}

module.exports = inverseRobot;
