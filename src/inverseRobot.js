'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const resultObj = {};
  let value;

  for (const key in robot) {
    value = robot[key];

    if (resultObj.hasOwnProperty(value)) {
      return null;
    }

    resultObj[value] = key;
  }

  return resultObj;
}

module.exports = inverseRobot;
