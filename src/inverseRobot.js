'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};
  const values = Object.values(robot);
  const uniqValues = new Set(values);

  if (values.length !== uniqValues.size) {
    return null;
  }

  for (const part in robot) {
    newRobot[robot[part]] = part;
  }

  return newRobot;
}
module.exports = inverseRobot;
