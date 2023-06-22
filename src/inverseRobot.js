'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/
function inverseRobot(robot) {
  const robotInserve = {};

  for (const value in robot) {
    if (robotInserve.hasOwnProperty(robot[value])) {
      return null;
    }

    robotInserve[robot[value]] = value;
  }

  return robotInserve;
}

module.exports = inverseRobot;
