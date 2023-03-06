'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  let newKey;
  let newValue;

  for (const key in robot) {
    newKey = robot[key];
    newValue = key;
    delete robot[key];
    robot[newKey] = newValue;
  }

  return robot;
}

module.exports = inverseRobot;
