'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const newRobot = {};

  for (const elem in robot) {
    const element = robot[elem];

    if (element in newRobot) {
      return null;
    };
    newRobot[element] = elem;
  }

  return newRobot;
}

module.exports = inverseRobot;
