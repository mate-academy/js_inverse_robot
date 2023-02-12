'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const obj = {};

  for (const part in robot) {
    obj[robot[part]] = part;
  }

  return Object.values(obj).length < Object.values(robot).length
    ? null
    : obj;
}

module.exports = inverseRobot;
