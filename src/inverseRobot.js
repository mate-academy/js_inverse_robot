'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const newRobot = {};
  const robotEntries = Object.entries(robot);

  for (let i = 0; i < robotEntries.length; i++) {
    for (let j = i; j < robotEntries.length; j++) {
      if (robotEntries[i][1] === robotEntries[j][1] && i !== j) {
        return null;
      }
    }
  }

  for (const entity of robotEntries) {
    newRobot[entity[1]] = entity[0];
  }

  return newRobot;
}

module.exports = inverseRobot;
