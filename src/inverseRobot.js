'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const inverted = {};
  const robotKeys = Object.keys(robot);
  const robotVals = Object.values(robot);

  for (let i = 0; i < robotKeys.length; i++) {
    if (robotVals[i] in inverted) {
      return null;
    }

    inverted[robotVals[i]] = robotKeys[i];
  }

  return inverted;
}

module.exports = inverseRobot;
