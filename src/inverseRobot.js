'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const result = {};

  for (const property in robot) {
    result[robot[property]] = property;
  }

  const valuesOfRobot = Object.values(robot);
  const valuesOfResult = Object.values(result);

  if (valuesOfResult.length < valuesOfRobot.length) {
    return null;
  }

  return result;
}

module.exports = inverseRobot;
