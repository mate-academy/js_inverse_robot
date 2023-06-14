'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const newObject = {};
  const array = Object.entries(robot);

  for (let i = 0; i < array.length; i++) {
    if (newObject[array[i][1]]) {
      return null;
    }
    newObject[array[i][1]] = array[i][0];
  }

  return newObject;
}

module.exports = inverseRobot;
