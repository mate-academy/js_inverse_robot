'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/
function inverseRobot(robot) {
  const repeatRobot = {};

  for (const key of Object.keys(robot)) {
    if (!robot[robot[key]]) {
      repeatRobot[robot[key]] = 0;
    }
    repeatRobot[robot[key]]++;

    if (repeatRobot[robot[key]] >= 2) {
      return null;
    }

    robot[robot[key]] = key;
    delete robot[key];
  }

  return robot;
}

module.exports = inverseRobot;
