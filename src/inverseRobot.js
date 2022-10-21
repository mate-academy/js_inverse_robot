'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  let newObject = {};

  for (const key in robot) {
    if (newObject.hasOwnProperty([robot[key]])) {
      newObject = null;
      break;
    } else {
      newObject[robot[key]] = key;
    }
  }

  return newObject;
}
module.exports = inverseRobot;
