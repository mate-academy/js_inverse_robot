'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  let newRobot = {};

  const maxElement = Object.values(robot);

  for (let i = 0; i < maxElement.length; i++) {
    for (let j = i + 1; j < maxElement.length; j++) {
      if (maxElement[i] === maxElement[j]) {
        newRobot = null;

        return newRobot;
      }
    }
  }

  for (const key in robot) {
    newRobot[robot[key]] = key;
  }

  return newRobot;
}

module.exports = inverseRobot;
