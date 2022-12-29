'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const rightRobot = {};
  // const valueArr = Object.values(robot);
  // const sortArr = valueArr.sort();

  for (const value in robot) {
    const key = robot[value];

    if (rightRobot.hasOwnProperty(key)) {
      return null;
    }

    rightRobot[key] = value;
  }

  return rightRobot;
}

module.exports = inverseRobot;
