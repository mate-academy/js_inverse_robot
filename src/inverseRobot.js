'use strict';

function inverseRobot(robot) {
  const correctArray = {};
  let value;

  for (const keys in robot) {
    value = robot[keys];

    if (correctArray.hasOwnProperty(value)) {
      return null;
    }

    correctArray[value] = keys;
  }

  return correctArray;
}

module.exports = inverseRobot;
