'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newObj = {};

  for (const [key, value] of Object.entries(robot)) {
    if (value in newObj) {
      return null;
    }
    newObj[value] = key;
  }

  return newObj;
}

module.exports = inverseRobot;
