'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const values = Object.values(robot);
  const uniqueValues = new Set(values);

  if (uniqueValues.size !== values.length) {
    return null;
  }

  const invertedRobot = { };

  for (const key in robot) {
    const value = robot[key];

    invertedRobot[value] = key;
  }

  return invertedRobot;
}

module.exports = inverseRobot;
