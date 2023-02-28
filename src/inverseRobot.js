'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const invertedRobot = {};
  const values = Object.values(robot);

  if (new Set(values).size !== values.length) {
    return null;
  }

  for (const [key, value] of Object.entries(robot)) {
    invertedRobot[value] = key;
  }

  return invertedRobot;
}

module.exports = inverseRobot;
