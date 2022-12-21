'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};
  const arrKeys = Object.keys(robot);
  const arrValues = Object.values(robot);
  const uniqueValues = [];

  for (const char of arrValues) {
    if (!uniqueValues.includes(char)) {
      uniqueValues.push(char);
    }
  }

  if (uniqueValues.length !== arrValues.length) {
    return null;
  }

  for (let i = 0; i < arrKeys.length; i++) {
    newRobot[arrValues[i]] = arrKeys[i];
  }

  return newRobot;
}

module.exports = inverseRobot;
