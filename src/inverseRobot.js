'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
 */

function inverseRobot(robot) {
  const copy = {};

  for (const key in robot) {
    copy[robot[key]] = key;
  }

  if (Object.keys(robot).length !== Object.keys(copy).length) {
    return null;
  }

  return copy;
}

module.exports = inverseRobot;
