'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reversedRobot = {};
  const values = Object.values(robot);

  for (let i = 0; i < values.length; i++) {
    if (values.indexOf(values[i]) !== i) {
      return null;
    }
  }

  for (const key in robot) {
    reversedRobot[robot[key]] = key;
  }

  return reversedRobot;
}

module.exports = inverseRobot;
