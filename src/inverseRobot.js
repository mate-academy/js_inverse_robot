'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newVersion = {};
  const entryes = Object.entries(robot);

  for (let i = 0; i < entryes.length; i++) {
    if (newVersion[entryes[i][1]] !== undefined) {
      return null;
    }
    newVersion[entryes[i][1]] = entryes[i][0];
  }

  return newVersion;
}

module.exports = inverseRobot;
