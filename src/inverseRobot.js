'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const values = [];

  for (const key in robot) {
    values.push(robot[key]);
  }

  const uniqueValues = new Set(values);

  if (uniqueValues.size < values.length) {
    return null;
  }

  const swapped = Object.entries(robot).map(
    ([key, value]) => ({ [value]: key })
  );

  return Object.assign({}, ...swapped);
}

module.exports = inverseRobot;
