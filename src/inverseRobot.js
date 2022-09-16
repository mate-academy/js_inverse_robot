'use strict';

function inverseRobot(robot) {
  const inverse = {};

  Object.keys(robot).forEach(function(value) {
    const key = robot[value];

    inverse[key] = value;
  });

  if (Object.keys(inverse).length < Object.keys(robot).length) {
    return null;
  }

  return inverse;
}

module.exports = inverseRobot;
