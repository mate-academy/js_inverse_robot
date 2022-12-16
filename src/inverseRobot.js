'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotValues = Object.values(robot);
  const robotKeys = Object.keys(robot);
  let newRobot = {};

  for (let i = 0; i < robotValues.length; i++) {
    const type = robotValues[i];

    newRobot[type] = robotKeys[i];
  }

  for (let i = 0; i < robotValues.length; i++) {
    for (let n = i + 1; n < robotValues.length; n++) {
      if (robotValues[i] === robotValues[n]) {
        newRobot = null;
      }
    }
  }

  return newRobot;
}

module.exports = inverseRobot;
