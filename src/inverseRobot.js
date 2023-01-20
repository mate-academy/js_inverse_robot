'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const answer = {};

  for (const i in robot) {
    const key = robot[i];

    if (answer[key]) {
      return null;
    }

    answer[key] = i;
  }

  return answer;
}

module.exports = inverseRobot;
