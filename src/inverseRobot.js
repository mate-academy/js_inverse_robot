'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverse = Object.fromEntries(Object.entries(robot).map((
    [key, value]) => [value, key]));

  return Object.keys(
    inverse).length < Object.values(
    robot).length ? null : inverse;
};

module.exports = inverseRobot;
