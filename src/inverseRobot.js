'use strict';

function inverseRobot(robot) {
  const inverse = {};

  for (const [key, value] of Object.entries(robot)) {
    if (inverse[value]) {
      return null;
    }

    inverse[value] = key;
  }

  return inverse;
}

module.exports = inverseRobot;
