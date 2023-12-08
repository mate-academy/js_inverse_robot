'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  let reversed = {};

  for (let key in robot) {
    const value = robot[key]
  }
  reversed[value] = key;
}

module.exports = inverseRobot;
