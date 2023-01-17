'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};

  // for (const key in robot) {
  //   newRobot[robot[key]] = key;
  // }

  // const oldRobotKeys = Object.values(robot).sort();
  // const newRobotKeys = Object.keys(newRobot).sort();

  // if (newRobotKeys.length !== oldRobotKeys.length) {
  //   return null;
  // }

  // return newRobot;

  for (const key in robot) {
    if (newRobot.hasOwnProperty(robot[key])) {
      return null;
    }
    newRobot[robot[key]] = key;
  }

  return newRobot;
}

module.exports = inverseRobot;
