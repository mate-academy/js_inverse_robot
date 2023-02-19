'use strict';

function inverseRobot(robot) {
  const res = {};

  for (const parts in robot) {
    const key = robot[parts];

    if (key in res) {
      return null;
    }
    res[key] = parts;
  }

  return res;
}

module.exports = inverseRobot;
