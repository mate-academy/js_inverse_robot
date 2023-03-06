'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  let newKey;
  let newValue;

  for (const key in robot) {
    newKey = robot[key];
    newValue = key;

    const keyArr = Object.keys(robot);

    delete robot[key];

    if (keyArr.includes(newKey)) {
      return null;
    }

    robot[newKey] = newValue;
  }

  return robot;
}

module.exports = inverseRobot;
