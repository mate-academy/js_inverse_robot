'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const copy = {};

  for (const prop in robot) {
    if (copy[robot[prop]]) {
      return null;
    }

    copy[robot[prop]] = prop;
  }

  return copy;
}

module.exports = inverseRobot;
