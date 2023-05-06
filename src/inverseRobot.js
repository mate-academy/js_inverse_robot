'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  let newRobot = {};

  const allRobotValues = Object.values(robot);

  for (let i = 0; i < allRobotValues.length; i++) {
    for (let j = i + 1; j < allRobotValues.length; j++) {
      if (allRobotValues[i] === allRobotValues[j]) {
        newRobot = null;

        return newRobot;
      }
    }
  }

  for (const key in robot) {
    newRobot[robot[key]] = key;
  }

  return newRobot;
}

module.exports = inverseRobot;
