'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  // write code here
  const values = Object.values(robot);
  const uniqeValues = new Set(values);

  if (values.length > uniqeValues.size) {
    return null;
  }

  const newRobot = {};

  for (const key in robot) {
    newRobot[robot[key]] = key;
  }

  return newRobot;
}

module.exports = inverseRobot;
