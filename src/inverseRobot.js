'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const parts = Object.entries(robot);
  const fixedRobot = {};

  for (const part of parts) {
    const value = part[0];
    const key = part[1];

    if (alreadyHasPart(fixedRobot, key)) {
      return null;
    }

    fixedRobot[key] = value;
  }

  return fixedRobot;
}

function alreadyHasPart(robot, part) {
  return !!robot[part];
}

module.exports = inverseRobot;
