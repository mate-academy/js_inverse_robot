'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const values = Object.values(robot);
  const uniqueValues = [];
  const inversedRobot = {};

  for (const value of values) {
    if (uniqueValues.indexOf(value) === -1) {
      uniqueValues.push(value);
    } else {
      return null;
    }
  }

  for (const key in robot) {
    inversedRobot[robot[key]] = key;
  }

  return inversedRobot;
}

module.exports = inverseRobot;
