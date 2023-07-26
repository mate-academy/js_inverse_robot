'use strict';

function inverseRobot(robot) {
  const newRobot = {};

  for (const key in robot) {
    const propertyValue = robot[key];

    if (newRobot.hasOwnProperty(propertyValue)) {
      return null;
    }

    newRobot[propertyValue] = key;
  }

  return newRobot;
}

module.exports = inverseRobot;
