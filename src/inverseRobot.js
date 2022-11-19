'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  if (robot === null) {
    return null;
  }

  const newRobot = {};

  for (const key in robot) {
    const value = robot[key];
    const ValueRepeat = key in newRobot;
    const keyCheck = robot[key] in newRobot;

    if (ValueRepeat || keyCheck) {
      return null;
    } else {
      newRobot[value] = key;
    }
  }

  return newRobot;
}

module.exports = inverseRobot;
