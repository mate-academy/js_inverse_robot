'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};
  const values = Object.values(robot);
  const repeatCheak = new Set(values).size === values.length;

  if (!repeatCheak) {
    return null;
  }

  for (const key in robot) {
    const value = robot[key];

    newRobot[value] = key;
  }

  return newRobot;
}

module.exports = inverseRobot;
