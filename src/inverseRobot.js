'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const rev = {};

  for (const i in robot) {
    rev[robot[i]] = i;
  }

  if (Object.keys(rev).length < Object.values(robot).length) {
    return null;
  } else {
    return rev;
  }
}

module.exports = inverseRobot;
