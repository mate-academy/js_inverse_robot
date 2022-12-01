'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const yetanotherRobot = {};
  const value = Object.values(robot);

  if (new Set(value).size !== value.length) {
    return null;
  }

  for (const key in robot) {
    yetanotherRobot[robot[key]] = key;
  }

  return yetanotherRobot;
}

module.exports = inverseRobot;
