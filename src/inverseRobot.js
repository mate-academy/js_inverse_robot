'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const values = Object.values(robot);
  const keys = Object.keys(robot);
  const resultObj = {};

  for (let i = 0; i < values.length; i++) {
    if (resultObj.hasOwnProperty(values[i])) {
      return null;
    }
    resultObj[values[i]] = keys[i];
  }

  return resultObj;
}

module.exports = inverseRobot;
