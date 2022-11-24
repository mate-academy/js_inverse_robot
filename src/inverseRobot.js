'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const rightVersionOfRobot = {};

  for (const key in robot) {
    const roboKey = robot[key];

    if (rightVersionOfRobot.hasOwnProperty(roboKey)) {
      return null;
    }
    rightVersionOfRobot[roboKey] = key;
  }

  return rightVersionOfRobot;
}

module.exports = inverseRobot;
