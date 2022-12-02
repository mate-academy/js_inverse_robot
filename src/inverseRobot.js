'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const repairRobot = {};
  const keys = Object.keys(robot);
  const values = Object.values(robot);

  for (let i = 0; i < keys.length; i++) {
    for (let j = i + 1; j < keys.length; j++) {
      if (values[i] === values[j]) {
        return null;
      }
    }

    repairRobot[values[i]] = keys[i];
  }

  return repairRobot;
}

module.exports = inverseRobot;
