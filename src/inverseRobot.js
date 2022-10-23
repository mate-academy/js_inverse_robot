'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const anotherRobot = {};

  for (const key in robot) {
    if (anotherRobot.hasOwnProperty(robot[key])) {
      return null;
    }

    anotherRobot[robot[key]] = key;
  }

  return anotherRobot;
}

module.exports = inverseRobot;
