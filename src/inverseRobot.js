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

  const fixedRobot = {};

  for (const entry of Object.entries(robot)) {
    fixedRobot[entry[1]] = entry[0];
  }

  return fixedRobot;
}

module.exports = inverseRobot;
