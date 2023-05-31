'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const values = Object.values(robot);
  const keys = Object.keys(robot);
  const inverse = {};

  const filter = new Set(values);

  if (filter.size !== values.length) {
    return null;
  }

  for (const i in values) {
    inverse[values[i]] = keys[i];
  }

  return inverse;
}

module.exports = inverseRobot;
