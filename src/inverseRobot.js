'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotValues = Object.values(robot);
  const robotKeys = Object.keys(robot);
  const newRobot = {};

  for (let i = 0; i < robotValues.length; i++) {
    const type = robotValues[i];

    if ([type] in newRobot) {
      return null;
    } else {
      newRobot[type] = robotKeys[i];
    }
  }

  return newRobot;
}

module.exports = inverseRobot;
