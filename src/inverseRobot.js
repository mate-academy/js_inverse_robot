'use strict';

function inverseRobot(robot) {
  const newRobot = {};

  for (const key of Object.keys(robot)) {
    if (newRobot.hasOwnProperty(robot[key])) {
      return null;
    }

    newRobot[robot[key]] = key;
  }

  return newRobot;
}

module.exports = inverseRobot;
