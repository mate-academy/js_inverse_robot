'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const entries = Object.fromEntries(Object.entries(robot)
    .map(([key, value]) => [value, key]));

  return Object.keys(entries).length
    !== Object.values(robot).length
    ? null : entries;
}

module.exports = inverseRobot;
