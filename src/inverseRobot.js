'use strict';

/*
 * @param {object} robot
 *
 * @return {object}
*/

function inverseRobot(robot) {
  const newRobot = {};
  let newProperty = '';

  for (const key in robot) {
    newProperty = robot[key];

    if (newRobot.hasOwnProperty(newProperty)) {
      return null;
    };

    newRobot[newProperty] = key;
  }

  return newRobot;
}

module.exports = inverseRobot;
