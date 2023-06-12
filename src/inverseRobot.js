'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const invertedRobot = {};
  const robotValues = Object.values(robot);
  const uniqueValues = [...new Set(robotValues)];

  if (uniqueValues.length !== robotValues.length) {
    return null;
  }

  for (const key in robot) {
    const value = robot[key];

    invertedRobot[value] = key;
  }

  return invertedRobot;
}

module.exports = inverseRobot;
