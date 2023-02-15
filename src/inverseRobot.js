'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverseObj = {};

  for (const [key, value] of Object.entries(robot)) {
    if (Object.keys(inverseObj).includes(robot[key])) {
      return null;
    }
    inverseObj[value] = key;
  }

  return inverseObj;
}

module.exports = inverseRobot;
