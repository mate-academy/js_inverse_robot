'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const revers = {};

  for (const key in robot) {
    revers[robot[key]] = key;
  }

  if (Object.keys(revers).length !== Object.keys(robot).length) {
    return null;
  }

  return revers;
}

module.exports = inverseRobot;
