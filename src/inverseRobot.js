'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
 */

function inverseRobot(robot) {
  // write code here
  const values = Object.values(robot);

  const newRobot = {};

  for (let i = 0; i < values.length; i++) {
    for (let j = i + 1; j < values.length; j++) {
      if (values[i] === values[j]) {
        return null;
      }
    }
  }

  Object.entries(robot).forEach((e) => {
    const key = e[1];
    const value = e[0];

    newRobot[key] = value;
  });

  return newRobot;
}

module.exports = inverseRobot;
