'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const uniqueValues = new Set(Object
    .values(robot))
    .size;
  const allValues = Object
    .values(robot)
    .length;

  if (uniqueValues !== allValues) {
    return null;
  }

  const invertedRobot = { ...robot };

  for (let key in invertedRobot) {
    const tempKey = key;
    const tempValue = invertedRobot[key];

    delete invertedRobot[key];
    key = tempValue;
    invertedRobot[key] = tempKey;
  }

  return invertedRobot;
}

module.exports = inverseRobot;
