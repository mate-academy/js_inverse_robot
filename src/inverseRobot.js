"use strict";

function inverseRobot(robot) {
  const result = {};

  for (const key in robot) {
    if (robot[key] in result) {
      return null;
    }
    result[robot[key]] = key;
  }

  return result;
}

module.exports = inverseRobot;
