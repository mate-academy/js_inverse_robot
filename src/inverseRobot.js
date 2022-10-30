'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const fixRobot = {};

  const arrValues = Object.values(robot);
  const arrKeys = Object.keys(robot);

  for (const key in robot) {
    if (arrValues.filter(n => n === robot[key]).length > 1
    || arrKeys.filter(n => n === key).length > 1) {
      return null;
    }
    fixRobot[robot[key]] = key;
  }

  return fixRobot;
}

module.exports = inverseRobot;
