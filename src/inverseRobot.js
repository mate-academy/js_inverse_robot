'use strict';

function inverseRobot(robot) {
  const miror = {};

  for (const key in robot) {

    if (robot[key] in miror) {
      return null;
    }

    miror[robot[key]] = key;
  }

  return miror;
}

module.exports = inverseRobot;
