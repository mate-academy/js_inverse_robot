'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};
  const values = Object.values(robot);
  const uniqueValues = new Set(values);

  if (uniqueValues.size !== values.length) {
    return null;
  }

  for (const property in robot) {
    newRobot[robot[property]] = property;
  }

  return newRobot;
}

module.exports = inverseRobot;
