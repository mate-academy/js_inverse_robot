'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const newObject = {};

  for (const key in robot) {
    newObject[robot[key]] = key;
  }

  return newObject;
};

module.exports = inverseRobot;
