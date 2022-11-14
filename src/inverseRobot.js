'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const keys = Object.keys(robot);
  const values = Object.values(robot);
  const newRobot = {};

  for (let i = 0; i < keys.length; i++) {
    newRobot[values[i]] = keys[i];
  }

  if (Object.keys(newRobot).length !== keys.length) {
    return null;
  }

  return newRobot;
}

module.exports = inverseRobot;
