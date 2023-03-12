'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const repaired = {};

  const values = Object.values(robot);
  const unique = new Set(values);

  if (values.length !== unique.size) {
    return null;
  }

  for (const key in robot) {
    repaired[robot[key]] = key;
  }

  return repaired;
}

module.exports = inverseRobot;
