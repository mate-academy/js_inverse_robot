'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const repairedRobot = {};
  const allValues = Object.values(robot);
  let uniqValue = '';

  for (const value of allValues) {
    if (uniqValue.includes(value)) {
      return null;
    } else {
      uniqValue += value;
    }
  }

  for (const key in robot) {
    repairedRobot[robot[key]] = [key].toString();
  }

  return repairedRobot;
}

module.exports = inverseRobot;
