'use strict';

function inverseRobot(robot) {
  const newRobot = {};

  for (const key in robot) {
    if (newRobot.hasOwnProperty(robot[key])) {
      return null;
    }

    newRobot[robot[key]] = String(key);
  }

  return newRobot;
}

module.exports = inverseRobot;
