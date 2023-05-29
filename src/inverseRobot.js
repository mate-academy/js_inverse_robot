'use strict';

function inverseRobot(robot) {
  const invertedRobot = {};

  for (const key in robot) {
    if (invertedRobot.hasOwnProperty(robot[key])) {
      return null;
    } else {
      invertedRobot[robot[key]] = key;
    }
  }

  return invertedRobot;
}

inverseRobot();

module.exports = inverseRobot;
