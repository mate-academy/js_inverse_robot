'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newObject = {};
  const savedValues = [];

  for (const key in robot) {
    const value = robot[key];

    if (savedValues.includes(value)) {
      return null;
    }
    savedValues.push(value);
    newObject[value] = key;
  }

  return newObject;
}

module.exports = inverseRobot;
