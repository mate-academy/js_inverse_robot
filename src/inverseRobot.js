'use strict';

function inverseRobot(robot) {
  const values = Object.keys(robot);
  const keys = Object.values(robot);
  const invertRobot = {};

  if (keys.length > 0) {
    for (let i = 0; i < keys.length; i++) {
      if (invertRobot.hasOwnProperty(keys[i])) {
        return null;
      }
      invertRobot[ keys[i] ] = values[i];
    }
  }

  return invertRobot;
}

module.exports = inverseRobot;
