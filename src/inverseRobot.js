'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotValues = Object.values(robot);

  for (let i = 0; i < robotValues.length; i++) {
    if (robotValues.indexOf(robotValues[i])
      !== robotValues.lastIndexOf(robotValues[i])) {
      return null;
    }
  }

  const robotEntries = Object.entries(robot);

  robotEntries.map(el => el.reverse());

  return Object.fromEntries(robotEntries);
}

module.exports = inverseRobot;
