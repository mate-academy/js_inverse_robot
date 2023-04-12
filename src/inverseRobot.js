'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};
  const values = Object.values(robot);

  if (new Set(values).size !== values.length) {
    return null;
  }

  for (const [key, value] of Object.entries(robot)) {
    newRobot[value] = key;
  }

  return newRobot;
}

module.exports = inverseRobot;
