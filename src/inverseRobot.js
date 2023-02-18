'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  let newObj = {};

  for (const key in robot) {
    if (newObj.hasOwnProperty(robot[key])) {
      newObj = null;
      break;
    }
    newObj[robot[key]] = key;
  }

  return newObj;
}

module.exports = inverseRobot;
