'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const INVERSE_ROBOT = {};

  // #1 use for in

  for (const key in robot) {
    if (INVERSE_ROBOT[robot[key]]) {
      return null;
    }
    INVERSE_ROBOT[robot[key]] = key;
  }

  // #2 use for of and Object.entries
  /*
  const ROBOT_ENTRIES = Object.entries(robot);
  for (const key of ROBOT_ENTRIES) {
    if (INVERSE_ROBOT[key[1]]) {
      return null;
    }

    INVERSE_ROBOT[key[1]] = key[0];
  }
  */

  // #3 use for () and Object.entries
  /*
  const ROBOT_ENTRIES = Object.entries(robot);
  for (let i = 0; i < array.length; i++) {
    if (newObject[array[i][1]]) {
      return null;
    }
    newObject[array[i][1]] = array[i][0];
  }
  */

  return INVERSE_ROBOT;
}

module.exports = inverseRobot;
