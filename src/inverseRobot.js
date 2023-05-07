'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversedRobot = {};
  const robotPartsAmount = Object.keys(robot).length;

  for (let i = 0; i < robotPartsAmount; i++) {
    inversedRobot[Object.values(robot)[i]] = Object.keys(robot)[i];
  }

  if (Object.keys(robot).length !== Object.keys(inversedRobot).length) {
    return null;
  }

  return inversedRobot;
}

module.exports = inverseRobot;
