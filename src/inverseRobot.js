'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const values = Object.values(robot);

  if (new Set(values).size !== values.length) {
    return null;
  }

  const inverse = {};

  for (const [key, value] of Object.entries(robot)) {
    inverse[value] = key;
  }

  return inverse;
}

module.exports = inverseRobot;
