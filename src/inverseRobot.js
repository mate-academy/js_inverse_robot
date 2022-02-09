'use strict';

function inverseRobot(robot) {
  const invRob = {};

  for (const key in robot) {
    if (invRob[robot[key]]) {
      return null;
    }
    invRob[robot[key]] = key;
  }

  return invRob;
}

module.exports = inverseRobot;
