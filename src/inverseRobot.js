'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const values = Object.values(robot);
  const uniqueValues = [...new Set(values)];

  if (uniqueValues.length !== values.length) {
    return null;
  }

  const inversedRobot = {};

  for (const key in robot) {
    inversedRobot[robot[key]] = key;
  }

  return inversedRobot;
}

module.exports = inverseRobot;
