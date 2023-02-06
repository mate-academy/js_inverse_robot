'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const arrRobot = Object.entries(robot);
  const arrValues = Object.values(robot);

  if ([...new Set(arrValues)].length !== arrValues.length) {
    return null;
  }

  arrRobot.forEach((e) => {
    e.reverse();
  });

  return Object.fromEntries(arrRobot);
}

module.exports = inverseRobot;
