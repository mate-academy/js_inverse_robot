'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const swap = {};
  let hasDublicate = false;

  for (const key in robot) {
    if (swap[robot[key]]) { //
      hasDublicate = true;
    } else {
      swap[robot[key]] = key;
    }
  }

  return hasDublicate ? null : swap;
}

module.exports = inverseRobot;
