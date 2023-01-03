'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};
  const arrValues = Object.values(robot);

  for (const elem of arrValues) {
    let count = 0;

    for (const key in robot) {
      if (elem === robot[key]) {
        count++;
      }
    }

    if (count > 1) {
      return null;
    }
  }

  for (const key in robot) {
    if (newRobot.hasOwnProperty(robot[key])) {
      return null;
    }

    newRobot[robot[key]] = key;
  }

  return newRobot;
}

module.exports = inverseRobot;
