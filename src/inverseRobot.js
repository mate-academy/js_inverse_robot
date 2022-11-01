'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotInverse = {};
  let name;

  for (const key in robot) {
    name = robot[key];

    if (robotInverse.hasOwnProperty(name)) {
      return null;
    }

    robotInverse[name] = key;
  }

  return robotInverse;
}

module.exports = inverseRobot;
