'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  let reversRobot = { ...robot };
  const robotKey = Object.keys(robot);
  const robotValues = Object.values(robot);
  const totalValue = {};
  let numberValue = 0;

  for (const key of robotKey) {
    reversRobot[robot[key]] = key;
    delete reversRobot[key];
  }

  for (const value of robotValues) {
    if (totalValue[value] === 1) {
      numberValue++;
      totalValue[value] = 0;
    } else {
      totalValue[value] = 1;
    }
  }

  if (numberValue > 0) {
    reversRobot = null
  }

  return reversRobot;
}

module.exports = inverseRobot;
