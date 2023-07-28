'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const keys = Object.keys(robot);
  const value = Object.values(robot);
  const fixedRobot = {};

  for (let i = 0; i < keys.length; i++) {
    if (fixedRobot.hasOwnProperty(value[i])) {
      return null;
    }
    fixedRobot[value[i]] = keys[i];
  }

  return fixedRobot;
}

module.exports = inverseRobot;
