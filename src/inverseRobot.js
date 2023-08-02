'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inversedObject = {};
  const robotKeys = Object.values(robot);
  const robotValues = Object.keys(robot);

  if (robotKeys.length !== new Set(robotKeys).size) {
    return null;
  }

  for (let i = 0; i < robotKeys.length; i++) {
    inversedObject[robotKeys[i]] = robotValues[i];
  }

  return inversedObject;
}

module.exports = inverseRobot;
