'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverse = {};
  const propertyValues = Object.values(robot);

  for (let i = 0; i < propertyValues.length; i++) {
    if (propertyValues.includes(propertyValues[i], i + 1)) {
      return null;
    }
  }

  for (const key in robot) {
    const objPropertyValue = robot[key];

    if (!inverse.hasOwnProperty(objPropertyValue)) {
      inverse[objPropertyValue] = key;
    }
  }

  return inverse;
}

module.exports = inverseRobot;
