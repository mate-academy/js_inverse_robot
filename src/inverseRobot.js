'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotRepaired = {};

  for (const [key, value] of Object.entries(robot)) {
    if (Object.hasOwn(robotRepaired, value)) {
      return null;
    }

    robotRepaired[value] = key;
  }

  return robotRepaired;
}

module.exports = inverseRobot;
