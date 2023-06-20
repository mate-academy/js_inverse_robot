'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const correctedRobot = {};
  const arrValueRobot = [];

  for (const key in robot) {
    arrValueRobot.push(robot[key]);
    correctedRobot[robot[key]] = key;
  }

  for (const el of arrValueRobot) {
    if (arrValueRobot.filter(elArr => el === elArr).length > 1) {
      return null;
    }
  }

  return correctedRobot;
}

module.exports = inverseRobot;
