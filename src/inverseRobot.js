'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  let newRobot = {};

  const values = Object.values(robot);

  for (let index = 0; index < values.length; index++) {
    if (values.includes(values[index], index + 1)) {
      newRobot = null;

      return newRobot;
    }
  }

  for (const key in robot) {
    newRobot[robot[key]] = key;
  }

  return newRobot;
}

module.exports = inverseRobot;
