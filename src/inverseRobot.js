'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const keys = Object.values(robot);
  const values = Object.keys(robot);
  const newRobot = {};

  for (let i = 0; i < keys.length; i++) {
    if (keys[i] in newRobot) {
      return null;
    }
    newRobot[keys[i]] = values[i];
  }

  return newRobot;
}

module.exports = inverseRobot;
