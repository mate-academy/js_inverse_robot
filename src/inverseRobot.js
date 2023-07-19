'use strict';

/*
 * @param {object} robot
*
* @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};
  let checkDoubleProper = false;

  Object.entries(robot).forEach((key) => {
    if (newRobot.hasOwnProperty(key[1])) {
      checkDoubleProper = null;

      return;
    }
    newRobot[key[1]] = key[0];
  });

  if (checkDoubleProper === null) {
    return null;
  }

  return newRobot;
  // write code here
}

module.exports = inverseRobot;
