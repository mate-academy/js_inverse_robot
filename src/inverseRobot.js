'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newObj = {};

  for (const [value, key] of Object.entries(robot)) {
    if (key in newObj) {
      return null;
    }

    newObj[key] = value;
  }

  return newObj;
}

module.exports = inverseRobot;
