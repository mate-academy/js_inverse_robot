'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const newObj = {};
  const mass = [];

  for (const part in robot) {
    if (mass.includes(robot[part])) {
      return null;
    }
    newObj[robot[part]] = part;
    mass.push(robot[part]);
  }

  return newObj;
}

module.exports = inverseRobot;
