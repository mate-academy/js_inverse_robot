'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const controlArr = Object.values(robot);
  const obj = {};

  if (controlArr.length !== new Set(controlArr).size) {
    return null;
  }

  for (const key in robot) {
    obj[robot[key]] = key;
  }

  return obj;
}

module.exports = inverseRobot;
