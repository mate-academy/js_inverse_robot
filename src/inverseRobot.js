'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const keys = Object.keys(robot);
  const values = Object.values(robot);
  const withoutRepeat = new Set(values);

  if (withoutRepeat.size !== values.length) {
    return null;
  }

  const reverseRobot = {};

  for (let i = 0; i < keys.length; i++) {
    reverseRobot[values[i]] = keys[i];
  }

  return reverseRobot;
}

module.exports = inverseRobot;
