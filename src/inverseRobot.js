'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
 */

function inverseRobot(robot) {
  const obj = {};

  for (const robotKey in robot) {
    const key = robot[robotKey];
    const value = robotKey;

    obj[key] = value;
  }

  const robotLength = Object.keys(robot).length;
  const objLength = Object.keys(obj).length;

  if (robotLength === objLength) {
    return obj;
  }

  return null;
}

module.exports = inverseRobot;
