'use strict';

function inverseRobot(robot) {
  for (const key of Object.keys(robot)) {
    if (robot.hasOwnProperty(robot[key])) {
      return null;
    }

    robot[robot[key]] = key;
    delete robot[key];
  }

  return robot;
}

module.exports = inverseRobot;
