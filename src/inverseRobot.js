'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const res = Object.fromEntries(Object.entries(robot).map(([key, value]) =>
    [value, key]));

  return Object.keys(res).length < Object.values(robot).length ? null : res;
}

module.exports = inverseRobot;
