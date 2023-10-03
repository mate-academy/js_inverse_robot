'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  if (hasRepeatedValues(robot)) {
    return null;
  }

  const inversed = {};

  for (const key in robot) {
    inversed[robot[key]] = key;
  }

  return inversed;
}

function hasRepeatedValues(obj) {
  const values = Object.values(obj);
  const uniqueValues = new Set(values);

  return !(values.length === uniqueValues.size);
}

module.exports = inverseRobot;
