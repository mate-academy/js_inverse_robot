'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const res = {};

  for (const key in robot) {
    res[robot[key]] = key;
  }

  return Object.keys(robot).length === Object.keys(res).length ? res : null;
}

module.exports = inverseRobot;
