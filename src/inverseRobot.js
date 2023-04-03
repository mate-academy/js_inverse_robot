'use strict';

function inverseRobot(robot) {
  const invertedObject = {};

  for (const key in robot) {
    if (invertedObject.hasOwnProperty(robot[key])) {
      return null;
    }
    invertedObject[robot[key]] = key;
  }

  return invertedObject;
};

module.exports = inverseRobot;
