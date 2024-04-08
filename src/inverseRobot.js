'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  let tempKyesRobot = {};
  let tempValueRobot = {};

  tempKyesRobot = Object.keys(robot);
  tempValueRobot = Object.values(robot);

  for (let i = 0; i < tempValueRobot.length; i++) {
    if (tempValueRobot.indexOf(tempValueRobot[i]) !== i) {
      return null;
    }
  }

  for (const key in robot) {
    delete robot[key];
  }

  for (const i in tempKyesRobot) {
    robot[tempValueRobot[i]] = tempKyesRobot[i];
  }

  return robot;
}

module.exports = inverseRobot;
