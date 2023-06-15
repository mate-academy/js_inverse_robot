'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
 */

function inverseRobot(robot) {
  const repairedRobot = {}; // create a new object

  // replace keys and values
  for (const key in robot) {
    // check if we meet the key again - return null
    if (repairedRobot.hasOwnProperty(robot[key])) {
      return null;
    } // if we don't - add normal value to normal key
    repairedRobot[robot[key].toString()] = key;
  }

  // return a healthy robot :)
  return repairedRobot;
}

module.exports = inverseRobot;
