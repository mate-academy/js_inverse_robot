'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const trueRobot = {};
  const params = [];

  for (const key in robot) {
    const paramName = robot[key];

    if (paramName === params.find(val => val === paramName)) {
      return null;
    }
    params.push(paramName);

    trueRobot[paramName] = key;
  }

  return trueRobot;
}

module.exports = inverseRobot;
