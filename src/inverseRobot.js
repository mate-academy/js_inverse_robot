'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  if (!robot) {
    return {};
  }

  const answer = {};

  for (const key in robot) {
    if (robot[key] in answer) {
      return null;
    }

    answer[robot[key]] = key;
  }

  return answer;
}

module.exports = inverseRobot;
