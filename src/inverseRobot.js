'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const entriesOfRobot = Object.entries(robot);
  const inverseObjectRobot = {};

  for (let i = 0; i < entriesOfRobot.length; i++) {
    if (inverseObjectRobot[entriesOfRobot[i][1]]) {
      return null;
    }
    inverseObjectRobot[entriesOfRobot[i][1]] = entriesOfRobot[i][0];
  }

  return inverseObjectRobot;
}
module.exports = inverseRobot;
