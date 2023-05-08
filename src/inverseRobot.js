'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
 */

function inverseRobot(robot) {
  const valuesOfRobot = Object.values(robot);
  const keysOfRobot = Object.keys(robot);
  const uniqueValuesOfRobot = new Set(valuesOfRobot);
  const inversedRobot = {};

  if (valuesOfRobot.length !== uniqueValuesOfRobot.size) {
    return null;
  }

  for (let i = 0; i < valuesOfRobot.length; i++) {
    inversedRobot[valuesOfRobot[i]] = keysOfRobot[i];
  }

  return inversedRobot;
}

module.exports = inverseRobot;
