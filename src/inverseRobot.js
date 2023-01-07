'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const inverseArr = {};
  const robotValues = Object.values(robot);
  const robotKeys = Object.keys(robot);

  for (let i = 0; i < robotValues.length; i++) {
    inverseArr[robotValues[i]] = robotKeys[i];
  }

  const inverseArrKeys = Object.keys(inverseArr);

  if (robotKeys.length !== inverseArrKeys.length) {
    return null;
  }

  return inverseArr;
}

module.exports = inverseRobot;
