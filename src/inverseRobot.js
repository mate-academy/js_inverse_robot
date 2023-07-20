'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const invertedRobot = {};
  const values = Object.values(robot);

  for (const key in robot) {
    const value = robot[key];

    if (values.filter((v) => v === value).length > 1) {
      return null;
    }

    invertedRobot[value] = key;
  }

  return invertedRobot;
}

module.exports = inverseRobot;
