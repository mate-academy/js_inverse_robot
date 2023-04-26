'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const inverse = {};

  const values = [];

  for (const [key, value] of Object.entries(robot)) {
    if (values.includes(value)) {
      return null;
    } else {
      inverse[value] = key;
      values.push(value);
    }
  }

  return inverse;
}

module.exports = inverseRobot;
