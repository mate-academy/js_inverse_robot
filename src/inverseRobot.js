'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const reversedRobot = {};
  const robotKeys = Object.keys(robot);
  const robotValues = Object.values(robot);
  const missingValues = [];

  for (const val of robotValues) {
    if (!missingValues.includes(val)) {
      missingValues.push(val);
    }
  }

  if (missingValues.length !== robotValues.length) {
    return null;
  }

  for (let i = 0; i < robotKeys.length; i++) {
    reversedRobot[robotValues[i]] = robotKeys;
  }
}

module.exports = inverseRobot;
