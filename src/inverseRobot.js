'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const sum = Object.fromEntries(
    Object.entries(robot).map(([key, value]) => [value, key])
  );

  if (Object.keys(sum).length < Object.values(robot).length) {
    return null;
  }

  return sum;
}

module.exports = inverseRobot;
