'use strict';

function inverseRobot(robot) {
  if (!robot) {
    return null;
  }

  const copy = {};

  for (const pair of Object.entries(robot)) {
    if (pair[1] in copy) {
      return null;
    }
    copy[pair[1]] = pair[0];
  }

  return copy;
}

module.exports = inverseRobot;
