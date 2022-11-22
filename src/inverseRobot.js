'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const normalRobot = Object.fromEntries(
    Object.entries(robot).map(([key, value]) => [value, key]));

  if (Object.keys(normalRobot).length < Object.values(robot).length) {
    return null;
  }

  return normalRobot;
}
module.exports = inverseRobot;
