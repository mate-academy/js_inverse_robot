'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverse = {};
  const propertyValues = Object.values(robot);
  let current;

  for (let i = 0; i < propertyValues.length; i++) {
    current = propertyValues[i];

    for (let j = i + 1; j < propertyValues.length; j++) {
      if (current === propertyValues[j]) {
        return null;
      }
    }
  }

  for (const key in robot) {
    inverse[robot[key]] = key;
  }

  return inverse;
}

module.exports = inverseRobot;
