'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotValues = Object.values(robot);
  const robotKeys = Object.keys(robot);

  if (new Set(robotValues).size !== robotValues.length) {
    return null;
  }

  const newRobot = {};

  for (let i = 0; i < robotValues.length; i++) {
    newRobot[robotValues[i]] = robotKeys[i];
  }

  return newRobot;
}

module.exports = inverseRobot;
