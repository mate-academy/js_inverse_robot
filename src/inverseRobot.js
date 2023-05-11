'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const repairedRobot = {};

  for (const key in robot) {
    const propertyValue = robot[key];

    if (repairedRobot[propertyValue]) {
      return null;
    }

    repairedRobot[propertyValue] = key;
  }

  return repairedRobot;
}

module.exports = inverseRobot;
