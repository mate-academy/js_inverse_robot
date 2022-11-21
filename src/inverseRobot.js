'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};
  const keys = Object.keys(robot);
  const values = Object.values(robot);

  if (hasDuplicates(keys)) {
    return null;
  }

  if (hasDuplicates(values)) {
    return null;
  }

  for (const [k, v] of Object.entries(robot)) {
    newRobot[v] = k;
  }

  return newRobot;
}

function hasDuplicates(array) {
  return (new Set(array)).size !== array.length;
}

module.exports = inverseRobot;
