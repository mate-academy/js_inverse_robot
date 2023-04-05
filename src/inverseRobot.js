'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const robotValues = Object.values(robot);
  const invertedRobot = {};

  for (const key in robot) {
    const checkValue = robotValues.shift();

    if (robotValues.includes(checkValue)) {
      return null;
    }

    invertedRobot[robot[key]] = key;
  }

  return invertedRobot;
}

module.exports = inverseRobot;
