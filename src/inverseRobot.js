'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const transpositionRobot = {};
  const prop = Object.keys(robot).concat(Object.values(robot));

  for (let i = 0; i < prop.length; i++) {
    for (let j = i + 1; j < prop.length; j++) {
      if (prop[i] === prop[j]) {
        return null;
      }
    }
  }

  for (const key in robot) {
    transpositionRobot[robot[key]] = key;
  }

  return transpositionRobot;
}

module.exports = inverseRobot;
