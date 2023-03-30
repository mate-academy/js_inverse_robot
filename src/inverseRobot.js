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

  for (let i = 0; i < robotValues.length; i++) {
    const checkValue = robotValues.shift();

    if (robotValues.includes(checkValue)) {
      return null;
    }
  }

  for (const key in robot) {
    invertedRobot[robot[key]] = key;
  }

  return invertedRobot;
}

module.exports = inverseRobot;
