'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newInverseObj = {};

  for (const key in robot) {
    if (newInverseObj.hasOwnProperty(robot[key])) {
      return null;
    }

    newInverseObj[robot[key]] = key;
  }

  return newInverseObj;
}

module.exports = inverseRobot;
