'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  let copy = {};

  for (const [key, value] of Object.entries(robot)) {
    copy[value] = key;
  }

  if (Object.keys(robot).length !== Object.keys(copy).length) {
    copy = null;
  }

  return copy;
}

module.exports = inverseRobot;
