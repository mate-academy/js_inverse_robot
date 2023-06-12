'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const ROBOT_VALUES = Object.values(robot);
  const invertedObject = {};

  // check for repeated items
  for (let i = 0; i < ROBOT_VALUES.length; i++) {
    for (let j = i + 1; j < ROBOT_VALUES.length; j++) {
      if (ROBOT_VALUES[i] === ROBOT_VALUES[j]) {
        return null;
      }
    }
  }

  for (const key in robot) {
    invertedObject[robot[key]] = key;
  }

  return invertedObject;
}

module.exports = inverseRobot;
