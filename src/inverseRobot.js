'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const transpositionRobot = {};
  const prop = Object.keys(robot).concat(Object.values(robot)).sort();

  for (let i = 0; i < prop.length; i++) {
    if (prop[i] === prop[i + 1]) {
      return null;
    }
  }

  for (const key in robot) {
    transpositionRobot[robot[key]] = key;
  }

  return transpositionRobot;
}

module.exports = inverseRobot;
