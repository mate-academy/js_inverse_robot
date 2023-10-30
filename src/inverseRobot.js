"use strict";
function inverseRobot(robot) {
  const inverse = {};

  for (const key in robot) {
    const value = robot[key];

    if (inverse[value] !== undefined) {
      return null; // Value is repeated, return null
    }

    inverse[value] = key;
  }

  return inverse;
}

module.exports = inverseRobot;
