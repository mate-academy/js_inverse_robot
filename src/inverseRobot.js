'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const rightRobot = {};
  const valueArr = Object.values(robot);
  const sortArr = valueArr.sort();

  for (let i = 0; i < sortArr.length; i++) {
    if (sortArr[i + 1] === sortArr[i]) {
      return null;
    }
  }

  for (const value in robot) {
    const key = robot[value];

    rightRobot[key] = value;
  }

  return rightRobot;
}

module.exports = inverseRobot;
