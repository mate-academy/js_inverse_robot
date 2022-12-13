'use strict';

function inverseRobot(robot) {
  const inversedRobot = {};

  for (const key in robot) {
    if (!inversedRobot[robot[key]]) {
      inversedRobot[robot[key]] = key;
    } else {
      return null;
    }
  }

  return inversedRobot;
}

module.exports = inverseRobot;
