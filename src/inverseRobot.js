'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotParts = Object.entries(robot);
  let modified = {};
  const cache = {};

  for (const part of robotParts) {
    if (!cache[part[1]]) {
      modified[part[1]] = part[0];
      cache[part[1]] = 1;
    } else {
      modified = null;
      break;
    }
  }

  return modified;
}

module.exports = inverseRobot;
