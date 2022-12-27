'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};
  const values = Object.values(robot);
  const keys = Object.keys(robot);
  const uniqueValues = [];

  for (const i of values) {
    if (uniqueValues.includes(i)) {
      return null;
    }
    uniqueValues.push(i);
  }

  for (let i = 0; i < keys.length; i++) {
    newRobot[values[i]] = keys[i];
  }

  return newRobot;
}

module.exports = inverseRobot;
