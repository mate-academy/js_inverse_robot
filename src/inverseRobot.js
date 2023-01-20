'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const repairedRobot = {};
  const arr = [];

  for (const key in robot) {
    arr.push(robot[key]);
  }

  if (new Set(arr).size !== arr.length) {
    return null;
  } else {
    for (const key in robot) {
      repairedRobot[robot[key]] = key;
    }
  }

  return repairedRobot;
}

module.exports = inverseRobot;
