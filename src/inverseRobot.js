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

  for (const entity of robotEntries) {
    if (newRobot.hasOwnProperty(entity[1])) {
      return null;
    }

    newRobot[entity[1]] = entity[0];
  }

  return newRobot;
}

module.exports = inverseRobot;
