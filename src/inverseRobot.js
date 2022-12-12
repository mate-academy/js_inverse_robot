'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const keys = Object.values(robot);
  const set = new Set(keys);

  if (keys.length !== set.size) {
    let newRrobot = robot;

    newRrobot = null;

    return newRrobot;
  }

  const inversed = {};

  for (const key in robot) {
    inversed[robot[key]] = key;
  }

  return inversed;
}

module.exports = inverseRobot;
