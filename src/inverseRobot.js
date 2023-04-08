'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const objEntries = Object.entries(robot);
  const trueRobot = {};

  for (const [key, value] of objEntries) {
    if (!trueRobot.hasOwnProperty(value)) {
      trueRobot[value] = key;
    } else {
      return null;
    }
  }

  return trueRobot;
}

module.exports = inverseRobot;
