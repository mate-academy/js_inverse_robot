'use strict';

function inverseRobot(robot) {
  const correctObj = {};
  let value;

  for (const keys in robot) {
    value = robot[keys];

    if (correctObj.hasOwnProperty(value)) {
      return null;
    }

    correctObj[value] = keys;
  }

  return correctObj;
}

module.exports = inverseRobot;
