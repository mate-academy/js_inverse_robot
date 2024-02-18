'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = Object.fromEntries(Object.entries(robot)
    .map(([key, value]) =>
      [value, key]));

  return Object.keys(newRobot).length === Object.values(robot).length
    ? newRobot : null;
}

module.exports = inverseRobot;
