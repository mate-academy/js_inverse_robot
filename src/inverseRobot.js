'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newObj = {};

  for (const prop in robot) {
    if (!newObj[robot[prop]]) {
      newObj[robot[prop]] = prop;
      continue;
    }

    return null;
  }

  return newObj;
}

module.exports = inverseRobot;
