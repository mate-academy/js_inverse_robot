'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const value = Object.keys(robot);
  const keys = [];
  const newRobot = {};

  for (let i = 0; i < value.length; i++) {
    keys.push(robot[value[i]]);
  }

  for (let i = 0; i < keys.length; i++) {
    if (newRobot[keys[i]] === undefined) {
      newRobot[keys[i]] = value[i];
    } else {
      return null;
    }
  }

  return newRobot;
}

module.exports = inverseRobot;
