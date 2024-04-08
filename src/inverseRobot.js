'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const robotObjEntries = Object.entries(robot);
  const trueRobot = {};

  for (const [key, value] of robotObjEntries) {
    if (!trueRobot.hasOwnProperty(value)) {
      trueRobot[value] = key;
    } else {
      return null;
    }
  }

  return trueRobot;
}

module.exports = inverseRobot;
