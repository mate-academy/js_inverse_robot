'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/
function inverseRobot(robot) {
  const repeatRobot = {};

  for (const value in robot) {
    const key = robot[value];

    if (repeatRobot[key]) {
      return null;
    }

    repeatRobot[key] = value;
  }

  return repeatRobot;
}

module.exports = inverseRobot;
