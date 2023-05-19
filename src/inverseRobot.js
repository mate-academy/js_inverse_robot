'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};
  let robotName;

  for (const key in robot) {
    robotName = robot[key];

    if (newRobot.hasOwnProperty(robotName)) {
      return null;
    }

    newRobot[robotName] = key;
  }

  return newRobot;
}

module.exports = inverseRobot;
