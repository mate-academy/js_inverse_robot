'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const revert = {};
  const exclusiveNames = [];

  for (const key in robot) {
    if (exclusiveNames.includes(robot[key])) {
      return null;
    }
    exclusiveNames.push(robot[key]);
    revert[robot[key]] = key;
  }

  return revert;
}

module.exports = inverseRobot;
