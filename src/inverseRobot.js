'use strict';

/**
 * @param {object} robot
 *
 * @return {object}
 */
function inverseRobot(robot) {
  // write code here

  const repaireRobot = {};

  for (const detail in robot) {
    if (repaireRobot.hasOwnProperty(robot[detail])) {
      return null;
    }

    repaireRobot[robot[detail]] = detail;
  }

  return repaireRobot;
}

module.exports = inverseRobot;
