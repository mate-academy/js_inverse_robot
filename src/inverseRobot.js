'use strict';

function inverseRobot(robot) {
  const obj = {};

  for (const robotKey in robot) {
    const key = robot[robotKey];
    const value = robotKey;

    if (obj.hasOwnProperty(key)) {
      return null;
    }

    obj[key] = value;
  }

  return obj;
}

module.exports = inverseRobot;
