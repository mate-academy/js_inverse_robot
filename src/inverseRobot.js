'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const repeatedRobot = {};

  for (const key in robot) {
    const value = robot[key];

    if (repeatedRobot.hasOwnProperty(value)) {
      return null;
    }

    repeatedRobot[value] = key;
  }

  return repeatedRobot;
}

inverseRobot({
  Kolli: 'name', 123: 'chipVer', 3: 'wheels',
});

module.exports = inverseRobot;
