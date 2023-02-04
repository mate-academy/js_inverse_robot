'use strict';

function inverseRobot(robot) {
  const mirror = {};

  for (const key in robot) {
    if (robot[key] in mirror) {
      return null;
    }

    mirror[robot[key]] = key;
  }

  return mirror;
}

module.exports = inverseRobot;
