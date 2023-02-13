'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};
  const key = Object.keys(robot);
  const value = Object.values(robot);

  for (let i = 0; i < key.length; i++) {
    newRobot[value[i]] = key[i];

    if (value[i] === value[i + 1]) {
      return null;
    }

    if (value.includes(value[i], i + 1)) {
      return null;
    }
  }

  return newRobot;
}

module.exports = inverseRobot;
