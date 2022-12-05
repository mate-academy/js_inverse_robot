'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/
function inverseRobot(robot) {
  const newRobot = {};

  const keys = Object.keys(robot);
  const values = Object.values(robot);

  for (let i = 0; i < keys.length; i++) {
    if ([values[i]] in newRobot) {
      return null;
    }
    newRobot[values[i]] = keys[i];
  }

  return newRobot;
}

module.exports = inverseRobot;
